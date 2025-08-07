# 🧪 AniResizer – Dr. Stone-Inspired Client-Side Image Resizer

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Markup](https://img.shields.io/badge/Markup-HTML5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![Style](https://img.shields.io/badge/Style-CSS3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deploy-Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://vercel.com)
[![Deploy-Netlify](https://img.shields.io/badge/Deploy-Netlify-brightgreen.svg)](https://netlify.com)
[![Live Demo](https://img.shields.io/badge/Demo-Available-brightgreen.svg)](#demo)

> ⚗️ **“This is exhilarating! With science and code, we’ll rebuild civilization — one pixel at a time.”**
> — *Senku Ishigami*

---

## 📌 Table of Contents

* [About](#-about)
* [Screenshots](#-screenshots)
* [Features](#-features)
* [Live Demo](#-live-demo)
* [Technology Stack](#-technology-stack)
* [Installation](#-installation)
* [Usage](#-usage)
* [Configuration & Options](#-configuration--options)
* [Project Structure](#-project-structure)
* [Contributing](#-contributing)
* [License](#-license)
* [Contact](#-contact)

---

## 📖 About

**AniResizer** is a high-performance, privacy-respecting image resizer inspired by the anime *Dr. Stone*. It is built entirely with HTML5, CSS3, and vanilla JavaScript (ES6+) to work seamlessly in the browser without uploading images to any server.

AniResizer allows users to:

* Resize images (JPG, PNG, WebP)
* Maintain aspect ratio
* Adjust compression and quality
* See real-time size and dimension feedback
* Download resized images instantly

All operations are done **client-side**, making it fast, secure, and offline-capable.

---

## 🖼️ Screenshots

> Coming soon: include visual previews of the interface (upload panel, resize controls, preview pane, etc.)

---

## 🌟 Features

✅ **Privacy First**

> Images never leave your browser—no server uploads. Your data stays on your device.

✅ **Aspect-Ratio Locking**

> Auto-calculates missing dimension when resizing if the lock is active.

✅ **Quality Slider**

> Adjust compression level for JPEG, PNG, or WebP formats.

✅ **Live Feedback**

> Shows both original and target file sizes & dimensions instantly.

✅ **Smooth UI Animations**

> Using Anime.js for progress bars, floating particles, and transitions.

✅ **Dr. Stone Themed**

> Styled with a modern yet scientific aesthetic, featuring quotes, green hues, and glow effects.

✅ **Mobile-Optimized**

> Responsive and accessible across devices, including Android/iOS.

✅ **Offline-Ready**

> Works as a fully static app—host on GitHub Pages, Vercel, or Netlify.

---

## 🔗 Live Demo

* 🌐 **GitHub Pages:** [https://Shineii86.github.io/AniResizer](https://Shineii86.github.io/AniResizer)
* ▲ **Vercel:** [https://aniresizer.vercel.app](https://aniresizer.vercel.app) Soon...
* 🌍 **Netlify:** [https://aniresizer.netlify.app](https://aniresizer.netlify.app) Soon...

---

## 🛠️ Technology Stack

| Layer     | Technology                                                                              |
| --------- | --------------------------------------------------------------------------------------- |
| Markup    | [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)                  |
| Style     | [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) w/ Flexbox & Custom Properties |
| Logic     | [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)            |
| Animation | [Anime.js](https://animejs.com) for interactivity                                       |
| Icons     | [Font Awesome 6](https://fontawesome.com)                                               |
| Hosting   | GitHub Pages, [Vercel](https://vercel.com), [Netlify](https://netlify.com)              |

---

## 🧩 Installation

### 📦 Clone & Setup

```bash
git clone https://github.com/Shineii86/AniResizer.git
cd AniResizer
```

### 🖥️ Run Locally

#### Using Live Server (VS Code Extension):

* Right-click `index.html` → `Open with Live Server`

#### Or use http-server:

```bash
npm install -g http-server
http-server .
```

---

## 🚀 Usage

1. **Upload Image**

   * Drag & drop into the upload panel or click **Browse Files**.

2. **Preview Metadata**

   * Original dimensions and file size are shown.

3. **Resize Image**

   * Enter width/height. Aspect ratio lock optional.

4. **Adjust Compression**

   * Move the quality slider from 10% to 100%.

5. **Preview Changes**

   * Output preview and new file size displayed.

6. **Download**

   * One-click download with timestamped filename.

7. **Reset**

   * Clears all inputs and resets the interface.

---

## ⚙️ Configuration & Options

| Feature             | Value                            |
| ------------------- | -------------------------------- |
| Supported Formats   | `.jpg`, `.jpeg`, `.png`, `.webp` |
| Max File Size       | 30 MB                            |
| Min Dimensions      | 1×1 pixels                       |
| Quality Range       | 10% – 100%                       |
| Output Naming       | `resized_<timestamp>.<ext>`      |
| Theme Customization | Via CSS `:root` variables        |

Customize colors, fonts, and layout by editing `index.html`'s `<style>` block.

---

## 📁 Project Structure

```
AniResizer/
├── index.html          # Main HTML + inline CSS & JS
├── LICENSE             # MIT License
├── README.md           # This file
└── assets/             # Optional assets (icons, images, etc.)
    ├── logo.svg
    ├── background.jpg
    └── fonts/
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

* 💡 Suggest features or improvements
* 🐛 Report bugs or usability issues
* 🤝 Submit pull requests

### 🚧 How to Contribute

1. Fork this repo
2. Create your feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

Please follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Shinei Nouzen**

* GitHub: [@Shineii86](https://github.com/Shineii86)
* Twitter: [@Shineii86](https://twitter.com/Shineii86)

---

> 🧬 Rebuild your images with science and precision—just like Senku would!
