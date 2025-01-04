# AR Sound Marker

An augmented reality web application that plays audio clips when specific image markers of "Chris" are detected through the device camera. 

> ⚠️ **Warning**: This is not really used for reuse. Moreso a personal project to play with augmented reality concepts. Built for a hometown bar after they lost a beloved patron. 

## Features

- 🎯 Image marker detection using AR.js
- 🎵 Interactive audio playback
- 📱 Cross-platform compatibility (iOS and desktop)
- 🔄 Random audio selection from available tracks
- 🖼️ Supports NFT (Natural Feature Tracking) markers
- 📱 Special handling for iOS devices

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ar-sound-marker.git
cd ar-sound-marker
```

2. Serve the files using a local web server (required for AR.js). You can use any of these methods:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - PHP: `php -S localhost:8000`

3. Ensure you have the marker images:
   - `chrismosaic` folder containing the NFT marker files
   - `chrisdrawing` folder containing alternative marker files

## Usage

1. Open the application in a modern web browser on a device with a camera
2. Allow camera access when prompted
3. Point the camera at the Chris image marker
4. Audio will play automatically on desktop browsers
5. For iOS devices, use the sound control button to enable audio playback

### Marker Requirements

Your marker images need to be processed into three files:
- `.fset`
- `.fset3`
- `.iset`

The project includes two pre-processed markers:
- Chris Mosaic (`chrismosaic` folder)
- Chris Drawing (`chrisdrawing` folder)

### Audio Files

Add or modify audio files in the `audio` folder. Update the `audioFiles` array in `app.js`:

```javascript
const audioFiles = [
    "audio/chris-gilbert-laugh.mp3",
    "audio/chris-singing.mp3"
    // Add more audio files here
];
```

### AR Settings

Modify AR.js settings in `index.html`:

```html
<a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
>
```

## Contributing

> ⚠️ **Warning**: This is not really used for reuse. Moreso a personal project to play with augmented reality concepts. Copy if you like!


## Testing

What's this?


## License

This project is open source. Include a LICENSE file in your repository.

## Acknowledgements

- [A-Frame](https://aframe.io/) - Web framework for building VR/AR experiences
- [AR.js](https://ar-js-org.github.io/AR.js/) - Augmented Reality library
- [aframe-look-at-component](https://github.com/ngokevin/aframe-look-at-component) - A-Frame component for camera control
- [aframe-physics-system](https://github.com/n5ro/aframe-physics-system) - Physics system for A-Frame

## Browser Support

- Chrome (desktop & mobile)
- Firefox (desktop & mobile)
- Safari (desktop & mobile)
- Edge (desktop)

Note: For iOS devices, user interaction is required to enable audio playback due to browser restrictions.
