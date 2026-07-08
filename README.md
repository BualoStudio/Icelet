# 小冰岛

![icelet-logo](background/icelet-readme-bg.png)

> 基于 TurboWarp 的跨平台统一UI框架，专为《本水塘》打造。

[![License](https://img.shields.io/badge/License-MIT-red.svg)](https://github.com/BualoStudio/Icelet/LICENSE) [![Platform](https://img.shields.io/badge/Platform-ALL-blue.svg)](https://github.com/BualoStudio/Icelet) [![Release](https://img.shields.io/badge/Release-None-yellow.svg)](https://github.com/BualoStudio/Icrlet/releases) [![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](https://github.com/BualoStudio/Icelet/discussions)

| 简体中文 |

**小冰岛** 是由 **Bualo Studio（浮标工作室）** 开发的一款基于 [TurboWarp](https://turbowarp.org) 的跨平台统一UI框架，也是专为《**本水塘**》打造的**游戏引擎**。本引擎旨在使用各种现代技术手段将一个完整的游戏通过 TurboWarp 打包为单一HTML文件，并以此实现全平台覆盖。

---

## 🖥️ 拟支持的平台

理论上，任何基于小冰岛制作的游戏都能实现**全平台覆盖**，只要这个平台能够完美支持HTML5或更高版本。在此列出部分受支持的操作系统平台：

- Android 2.0 及更高版本
- iOS 3.0 及更高版本
- ipadOS 13 及更高版本
- Windows 7 及更高版本
- macOS X 10.4 及更高版本
- Linux 主流的发行版
- ChromeOS 132 及更高版本
- HarmonyOS 5 及更高版本

---

## 🛠️ 开始构建

如果你希望使用小冰岛进行游戏开发，请参阅 [小冰岛开发指北]()。

> [!WARNING]
> 在使用小冰岛进行游戏开发时，请确保你**已加载全部自定义扩展**。

---

## ✨ 功能实现列表

作为游戏引擎，小冰岛理应进行完整的功能支持。但受限于开发期限、精力及资源分配等多方面问题及考量，我们目前仅列出部分的功能支持，这部分功能应当是与《本水塘》深度挂钩的关键功能，我们必须支持这些功能。

1. [ ] 通过网页控制扩展实现对大部分屏幕比例甚至全屏幕比例的显示支持，使开发人员能够无需为各种屏幕比例专门设计专用的角色造型。
2. [ ] 通过文件扩展打开和解析语言文件实现全文本多语言支持。
3. [ ] 通过自定义扩展打开和解析本地造型包和声音包文件实现造型和声音自定义支持。
4. [ ] 通过资源管理扩展从URL下载和解析角色、造型和声音以更好的实现对MOD的支持。
5. [ ] 通过自定义扩展将本引擎作为基础代码平台，使基于本基础代码平台上开发的游戏中的基础代码平台部分能够跟随本基础代码平台做出同步代码更新，并且不破坏基于本基础代码平台上开发的游戏的代码。
6. [ ] 通过自定义扩展实现对P2P联机的支持，并引入TCP/UDP连接协议支持，甚至让大型多人服务器成为可能。
7. [ ] 通过角色代码块模板实现对多种控件的支持，这些控件应当包括按钮类、滑动变阻器类、输入类等，确保重复调用控件应当是简单和资源占用低的。
8. [ ] 通过角色代码块模板实现对多种通知的支持，这些通知应当包括全屏通知、半屏通知、静默通知、弹窗通知等，确保触发通知时应当使视觉效果平滑和连贯。
9. [ ] 通过角色代码块模版实现对2D可自由移动地图的支持，能够让角色按操作进行非线性移动，并在碰到地图边缘时阻止继续移动。
10. [ ] 通过自定义扩展实现对造型的曲线拉伸，能够控制角色的拉伸、弯曲等，并且能够设定拉伸值、增加拉伸值、更改拉伸模式（包括但不限于微风吹拂、）。
11. [ ] 通过自定义扩展实现在主HTML文件加载时呈现一个前置HTML，用于展示一些动画、出品方LOGO、光敏性癫痫警告等前置提示内容。
12. [ ] 通过自定义扩展使造型能够像颜色特效块那样为角色设定高斯模糊值、增加模糊半径、更改模糊效果（包括但不限于亚克力、毛玻璃和云母）。

---

## 🪏 道阻且长

小冰岛的设计初衷是好的。

---

## 🤝 参与共建

小冰岛不仅仅是我们的作品，我们希望它能成为初级游戏开发者的“优秀跨平台2D游戏引擎”。欢迎你为小冰岛添砖加瓦！

我们极其欢迎以下形式的 Issue：  

1. **引擎存在的问题**：报告引擎在特定情况下触发的问题、漏洞和错误，甚至解决方案。  
2. **新功能建议**：为引擎提出新的功能构思和设想，亦或是仅提出建议。

> [!TIP]
> 参与前，请务必阅读我们的 [贡献指南](https://github.com/BualoStudio/Icelet/CONTRIBUTING.md) 并遵守 [行为准则](https://github.com/BulaoStudio/Icelet/CODE_OF_CONDUCT.md)。

> [!NOTE]
> 由于 TurboWarp 的单一源文件限制，请不要直接对源文件提交 Pull Request。但你可以将 Bug 提交到 [Issue](https://github.com/BualoStudio/Icelet/Issue)。

---

## 📜 开源许可证

作为《本水塘》项目的一部分，小冰岛遵循《本水塘》在代码资产方面使用的 [MIT License](https://mit-license.org/)。

> [!TIP]
> 关于《本水塘》的美术资产/音乐资产和代码资产（不同资产类别）使用的不同的许可证及授权方式，请转到 [本水塘资产使用的许可证]()。

---

## 💌 关于

### 开发团队：Bualo Studio（浮标工作室）

制作组官方邮箱： thenativepond@gmail.com
工作室官方邮箱： bualostudio@gmail.com

### 开发人员

#### [Crazy Sue](https://github.com/CrazySue)
- 工程师
- 编程开发
- UI/UX设计

### 特此感谢

#### [awa_Liny](https://github.com/awaLiny2333)
- awa_Liny 开发的游戏《今日极地湾》为小冰岛的UI/UX设计风格提供了大量灵感和美术素材。

---

*由 Crazy Sue 用❤️制作。由 Bualo Studio 鼎力支持。
