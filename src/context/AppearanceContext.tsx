import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'oled';
type AccentColor = 'emerald' | 'cyan' | 'amber' | 'ruby';

interface AppearanceSettings {
    theme: Theme;
    accentColor: AccentColor;
    compactMode: boolean;
    animations: boolean;
}

interface AppearanceContextType extends AppearanceSettings {
    setTheme: (theme: Theme) => void;
    setAccentColor: (color: AccentColor) => void;
    setCompactMode: (enabled: boolean) => void;
    setAnimations: (enabled: boolean) => void;
}

const DEFAULT_SETTINGS: AppearanceSettings = {
    theme: 'dark',
    accentColor: 'emerald',
    compactMode: false,
    animations: true,
};

function loadAppearanceSettings(): AppearanceSettings {
    try {
        const stored = localStorage.getItem('shrink_settings');
        if (stored) {
            const parsed = JSON.parse(stored);
            return {
                theme: parsed.theme ?? DEFAULT_SETTINGS.theme,
                accentColor: parsed.accentColor ?? DEFAULT_SETTINGS.accentColor,
                compactMode: parsed.compactMode ?? DEFAULT_SETTINGS.compactMode,
                animations: parsed.animations ?? DEFAULT_SETTINGS.animations,
            };
        }
    } catch { }
    return DEFAULT_SETTINGS;
}

const AppearanceContext = createContext<AppearanceContextType | undefined>(undefined);

export function AppearanceProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<AppearanceSettings>(loadAppearanceSettings);

    // Apply theme and compact mode to document root
    useEffect(() => {
        const root = document.documentElement;

        // Apply theme
        root.classList.remove('theme-dark', 'theme-oled');
        root.classList.add(`theme-${settings.theme}`);

        // Apply compact mode
        if (settings.compactMode) {
            root.classList.add('compact-mode');
        } else {
            root.classList.remove('compact-mode');
        }

        // Apply animations setting
        if (!settings.animations) {
            root.classList.add('no-animations');
        } else {
            root.classList.remove('no-animations');
        }
    }, [settings.theme, settings.compactMode, settings.animations]);

    const updateSetting = useCallback(<K extends keyof AppearanceSettings>(
        key: K,
        value: AppearanceSettings[K]
    ) => {
        setSettings(prev => {
            const newSettings = { ...prev, [key]: value };
            // Also save to localStorage for persistence
            try {
                const existing = localStorage.getItem('shrink_settings');
                const allSettings = existing ? { ...JSON.parse(existing) } : {};
                allSettings[key] = value;
                localStorage.setItem('shrink_settings', JSON.stringify(allSettings));
            } catch { }
            return newSettings;
        });
    }, []);

    const setTheme = useCallback((theme: Theme) => updateSetting('theme', theme), [updateSetting]);
    const setAccentColor = useCallback((color: AccentColor) => updateSetting('accentColor', color), [updateSetting]);
    const setCompactMode = useCallback((enabled: boolean) => updateSetting('compactMode', enabled), [updateSetting]);
    const setAnimations = useCallback((enabled: boolean) => updateSetting('animations', enabled), [updateSetting]);

    return (
        <AppearanceContext.Provider value={{
            ...settings,
            setTheme,
            setAccentColor,
            setCompactMode,
            setAnimations,
        }}>
            {children}
        </AppearanceContext.Provider>
    );
}

export function useAppearance() {
    const context = useContext(AppearanceContext);
    if (context === undefined) {
        throw new Error('useAppearance must be used within an AppearanceProvider');
    }
    return context;
}