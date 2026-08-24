# Icelet

![icelet-logo](background/icelet-readme-bg.png)

> A cross-platform unified UI framework based on TurboWarp, specifically designed for "The Native Pond".

[![License](https://img.shields.io/badge/License-MIT-red.svg)](https://github.com/BualoStudio/Icelet/LICENSE) [![Platform](https://img.shields.io/badge/Platform-ALL-blue.svg)](https://github.com/BualoStudio/Icelet) [![Release](https://img.shields.io/badge/Release-None-yellow.svg)](https://github.com/BualoStudio/Icrlet/releases) [![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](https://github.com/BualoStudio/Icelet/discussions)

English | [简体中文](https://github.com/BualoStudio/Icelet/edit/main/README-zh_CN.md)

> [!WARNING]
> Due to unforeseen circumstances, Little Iceland has ceased development. We are currently seeking a new game engine or technical implementation method to provide technical support for this game. For details, please read the Little Iceland termination announcement: ["A Sudden Ending, Like Youth Itself"](https://github.com/BualoStudio/Icelet/releases/tag/TheEnding).

**Icelet** was a cross-platform unified UI framework based on [**TurboWarp**](https://turbowarp.org)](https://turbowarp.org), developed by **Bualo Studio**. It was also a **game engine** specifically designed for [《**This Game**](https://github.com/BualoStudio/TheNativePond)]. This engine aimed to use modern web technologies to package a complete game into a single HTML file using TurboWarp, thereby achieving cross-platform compatibility.

---

## 🖥️ Supported Platforms

Theoretically, any game built with Icelet can achieve **full platform coverage**, as long as the platform perfectly supports HTML5 or higher. Here is a partial list of supported operating system platforms:

- Android 2.0 and higher
- iOS 3.0 and higher
- iPadOS 13 and higher
- Windows 7 and higher
- macOS X 10.4 and higher
- Major Linux distributions
- ChromeOS 132 and higher
- HarmonyOS 5 and higher

---

## 🛠️ Getting Started

If you wish to use Icelet for game development, please refer to the [Icelet Wiki](https://github.com/BualoStudio/Icelet/wiki).

> [!WARNING]
> When developing games using Icelet, please ensure that you **have loaded all custom extensions**.

---

## ✨ Feature Implementation List

As a game engine, Icelet should ideally offer full feature support. However, due to limitations in development timelines, time, 和 resource allocation, we are currently only listing a portion of the supported features. These features are crucial to the depth of Icelet and we must support them.

1. [ ] Enables support for most screen ratios, even full-screen ratios, through a web control extension, allowing developers to avoid designing custom character models for various screen ratios.
2. [ ] Enables full-text multilingual support by opening and parsing language files through a file extension.
3. [ ] Enables custom character and sound support by opening and parsing local character and sound packs through a customization extension.
4. [ ] Enables better MOD support by downloading and parsing characters, character models, 和 sounds from URLs through a resource management extension.
5. [ ] By using custom extensions to make this engine the base code platform, the base code platform portion of games developed on this platform can be updated synchronously with the platform without breaking the game code.
6. [ ] By using custom extensions to support P2P online play, and introducing TCP/UDP connection protocol support, even enabling large-scale multiplayer servers.
7. [ ] By using character code block templates to support various controls, including buttons, sliders, input methods, etc., ensuring that repeatedly called controls are simple and have low resource consumption.
8. [ ] By using character code block templates to support various notifications, including full-screen notifications, half-screen notifications, silent notifications, pop-up notifications, etc., ensuring that notifications have smooth and consistent visual effect
9. [ ] By using character code block templates to support 2D freely movable maps, allowing characters to move non-linearly based on actions and stopping further movement when encountering map edges.
10. [ ] Custom extensions allow for curve stretching of the character's form, controlling its stretching and bending, 和 enabling the setting, increasing, 和 changing of stretching values ​​(including but not limited to gentle breezes).
11. [ ] Custom extensions allow for the presentation of a pre-loaded HTML element when the main HTML file loads, displaying animations, the production company's logo, 和 warnings about photosensitive epilepsy.
12. [ ] Custom extensions allow for setting Gaussian blur values, increasing blur radii, and changing blur effects (including but not limited to acrylic, frosted glass, and mica) for the character, similar to color effect blocks.

---

## 🪏 The Road Ahead

The initial design intention of Icelet was good. However, due to the limitations of TurboWarp, some functions are unavailable, which is regrettable.

1. Icelet cannot perfectly adapt to all screen ratios. Although we can alleviate this problem by presetting some screen ratios, it cannot fundamentally solve the issue.
2. Icelet does not support player-customized color schemes because there is no extension to modify character colors.
3. Icelet does not support importing `.json` files; only `.txt` files can be imported.
4. Icelet only supports 2D game development, 和 its support is limited.
5. Due to TurboWarp limitations, Icelet must wait for all resources to load completely before it can begin its initialization process, which requires a longer loading time than other game engines.

---

## 🤝 Participate in Building 

Icelet is not just our creation; we hope it can become an "excellent cross-platform 2D game engine" for junior game developers. We welcome your contributions to Icelet!

We highly welcome the following types of Issues:

1. **Existing Issues**: Report issues, bugs, 和 errors that LittleIceland encounters under specific conditions, 和 even solutions.
2. **New Feature Suggestions**: Propose new feature ideas and concepts for the engine, or simply provide suggestions.

> [!TIP]
> Before participating, please be sure to read our [**Contribution Guidelines**](https://github.com/BualoStudio/Icelet/blob/main/.github/CONTRIBUTING.md) and abide by our [**Code of Conduct**](https://github.com/BualoStudio/Icelet/blob/main/.github/CODE_OF_CONDUCT.md)。

> [!NOTE]
> Due to TurboWarp's single-source file limitation, please do not submit Pull Requests directly to the source file. However, you can submit bugs to [**Issue**](https://github.com/BualoStudio/Icelet/issues)。

---

## 📊 Project Status

![Alt](https://repobeats.axiom.co/api/embed/4ad480de538762f57afb780cd7441253316c1d61.svg "Repobeats analytics image")

---

## 📜 Open Source License

As part of _The Native Pond_ project, Little Iceland follows the [**MIT License**](https://github.com/BualoStudio/TheNativePond/blob/main/docs/about/license/code-license) used by _The Native Pond_ for its code assets. See the [**LICENSE**](https://github.com/BualoStudio/Icelet/blob/main/LICENSE) file for details.

> [!TIP]
> For information on the different licenses and authorization methods used for the art assets, music assets, 和 code assets (different asset categories) of _The Native Pond_, please refer to [**Licenses Used for Assets in _The Native Pond_**](https://github.com/BualoStudio/TheNativePond/blob/main/LICENSE)。

---

## 💌 About

### 🪪 Development Team: Bualo Studio

- Official Email for the Development Team: [thenativepond@gmail.com](mailto:thenativepond@gmail.com)
- Official Email for the Studio: [bualostudio@gmail.com](mailto:bualostudio@gmail.com)

### 🖥️ Developers

#### [Crazy Sue](https://github.com/CrazySue)

- Engineer
- Programming Development
- UI/UX Design

### 🫶 Special Thanks

#### [awa_Liny](https://github.com/awaLiny2333)

- awa_Liny's game "Today@PolarBay" provided a wealth of inspiration and art assets for Icelet's UI/UX design style.

---

*Made with ❤️ by Crazy Sue. Powered by Bualo Studio. *
