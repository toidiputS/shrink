import ffmpeg

def convert_to_transparent_webm(input_file, output_file):
    try:
        (
            ffmpeg
            .input(input_file)
            .filter('colorkey', color='0xFFFFFF', similarity=0.1, blend=0.1) # Keying out white
            .output(
                output_file,
                vcodec='libvpx-vp9',
                pix_fmt='yuva420p',
                lossless=1,             # Ensures highest quality for UI
                deadline='good',        # Balanced compression speed
                cpu_used=1              # Better compression efficiency
            )
            .overwrite_output()
            .run()
        )
        print(f"Success! {output_file} is ready for the Youniverse.")
    except ffmpeg.Error as e:
        print(f"Error occurred: {e.stderr.decode()}")

if __name__ == '__main__':
    # Configuration
    input_path = 'input_video.mp4'
    output_path = 'youniverse_asset.webm'

    convert_to_transparent_webm(input_path, output_path)
