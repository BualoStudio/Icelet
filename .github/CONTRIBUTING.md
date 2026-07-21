# CONTRIBUTING

Hello! Thank you for your interest in contributing to _The Native Pond_. This guide will help you get started.

## 0. 📖 Prerequisites

Before you start contributing, please make sure you have:

- Read this project's [README](https://github.com/BualoStudio/Icelet/edit/main/README.md) to get a general understanding of the project.
- Carefully read and comply with the [LICENSE](https://github.com/BualoStudio/Icelet/blob/main/LICENSE).
- Carefully read and comply with the [Code of Conduct](https://github.com/BualoStudio/Icelet/blob/main/.github/CODE_OF_CONDUCT.md).
- Have the TurboWarp editor ready: [TurboWarp Desktop](https://desktop.turbowarp.org/) (recommended) or [TurboWarp Webapp](https://turbowarp.org/editor).
- Search existing [Issues](https://github.com/BualoStudio/Icelet/issues) and [Pull Requests](https://github.com/BualoStudio/Icelet/pulls) to avoid duplicate work.

## 1. 🛠️ Fork this repository

1. Click the **Fork** button in the upper-right corner of the [Icelet](https://github.com/BualoStudio/Icelet) page.
2. Modify any basic information if needed, then click the **Create fork** button below.

## 2. 💻 Contribute code

Since Icelet is a multimedia game project, you only need to choose the area you wish to contribute to.

### 🪨 TurboWarp project files (.sb3)

> [!WARNING]
> Because TurboWarp project files are binary files and not suitable for code review, please do not submit Pull Requests directly against project files. Generally, we do not accept Pull Requests for project files.

If you absolutely need to modify a project file, please:

- Submit an Issue containing a complete modification proposal
- Or design a corresponding JavaScript custom extension
- Or [contact us](mailto:thenativepond@gmail.com)

If we consider your request reasonable and necessary, we may invite you to collaboratively modify the project file.

##### We do not accept:

- Pull Requests against project files submitted without prior discussion
- Modifications to Scratch Blocks
- Modifications to the TurboWarp kernel
- Large-scale refactoring submitted without prior discussion

### 🧩 Custom extensions (.js)

Because TurboWarp's built‑in functionality is somewhat limited for Icelet's development needs, we use custom extensions to supplement missing features.

##### Accepted contributions:

- Custom extensions that introduce new functionality
- Bug fixes for existing custom extensions
- Performance optimisations for existing custom extensions
- API improvements for existing custom extensions
- Comment improvements and documentation supplements for existing custom extensions

##### We do not accept:

- Modifications to Scratch Blocks
- Modifications to the TurboWarp kernel
- Large-scale refactoring submitted without prior discussion

##### When writing JavaScript custom extensions, please:

- Use modern JavaScript
- Maintain code readability and consistent style
- Use meaningful variable names (follow the [Naming Conventions](https://github.com/BualoStudio/Icelet/wiki/Naming-Conventions))
- Avoid code duplication
- Add necessary comments
- Remove debugging code
- Do not submit minified code

##### Before submitting your contribution, please double‑check that:

- It runs correctly
- There are no console errors
- It does not affect other extensions
- Basic testing has been completed

### 💡 Other

Have another way you'd like to contribute? If so, please [contact us](mailto:thenativepond@gmail.com) to discuss your contribution.

## 3. 📡 Submit

As usual, commit your contributions to your forked repository. Different contribution areas correspond to different file locations:

.  
├── extensions/          JavaScript custom extensions  
├── docs/                Documentation  
├── LICENSE  
└── README.md  

Place your contributions in the appropriate folder.

## 4. 🔗 Create a Pull Request

Navigate to the [TheNativePond](https://github.com/BualoStudio/Icelet) page, click the **Pull requests** tab, then click the **New pull request** button. Click the **Compare across forks** link and select your fork repository.

Review the changes, then click the **Create pull request** button.

## 5. 🎉 Wow! You did it!

Congratulations! You have completed your contribution to this project. Now you can wait for us to review your pull request.
