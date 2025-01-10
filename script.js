function generateScene() {
    const setting = document.getElementById('setting').value;
    const lighting = document.getElementById('lighting').value;
    const camera = document.getElementById('camera').value;
    const mood = document.getElementById('mood').value;
    const resolution = document.getElementById('resolution').value;
    const aspectRatio = document.getElementById('aspectRatio').value;
    const frameRate = document.getElementById('frameRate').value;
    const shutterSpeed = document.getElementById('shutterSpeed').value;
    const iso = document.getElementById('iso').value;
    const whiteBalance = document.getElementById('whiteBalance').value;
    const colorProfile = document.getElementById('colorProfile').value;
    const stabilization = document.getElementById('stabilization').value;

    const generatedScene = `
        **Setting**: ${setting}
        **Lighting**: ${lighting}
        **Camera**: ${camera}
        **Mood**: ${mood}
        
        **Technical Parameters**:
        - Resolution: ${resolution}
        - Aspect Ratio: ${aspectRatio}
        - Frame Rate: ${frameRate}
        - Shutter Speed: ${shutterSpeed}
        - ISO: ${iso}
        - White Balance: ${whiteBalance}
        - Color Profile: ${colorProfile}
        - Stabilization: ${stabilization}
    `;

    document.getElementById('generatedScene').value = generatedScene;
}
