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

    const scene = `
**Scene**
- **Setting**: ${setting}

**Lighting**
- **Type**: ${lighting}

**Camera**
- **Angles**: ${camera}

**Mood**
- **Atmosphere**: ${mood}

**Technical Parameters for Professional Cinematic Rendering**
- **Resolution**: ${resolution}
- **Aspect ratio**: ${aspectRatio}
- **Frame rate**: ${frameRate}
- **Shutter speed**: ${shutterSpeed}
- **ISO**: ${iso}
- **White balance**: ${whiteBalance}
- **Color profile**: ${colorProfile}
- **Stabilization**: ${stabilization}
`;

    document.getElementById('generatedScene').value = scene;
}
