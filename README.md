<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# BOULDER_DASH

<em></em>

<!-- BADGES -->
<!-- local repository, no metadata badges. -->

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=default&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=default&logo=Webpack&logoColor=black" alt="Webpack">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=default&logo=CSS&logoColor=white" alt="CSS">

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Boulder Dash is a classic arcade-inspired logic and action game where the player collects gems in an underground maze. The goal is to gather a required number of gems and reach the exit while avoiding falling boulders and enemies.

This project is a TypeScript-based interpretation of the original Boulder Dash from the Atari era. It was one of my first larger personal projects, created during high school, aiming to faithfully recreate the core mechanics of the 1980s classic.

---

## Features

<code>
🔹 Classic gameplay inspired by the original Boulder Dash
🎮 Keyboard controls with intuitive movement
🧱 Dynamic environment: falling rocks, destructible terrain, reactive surroundings
💎 Gem collection and limited time management
🧠 Simple enemy and collision logic
</code>

---

## Project Structure

```sh
└── boulder_dash/
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── bundle.js
    │   ├── font
    │   ├── img
    │   ├── index.html
    │   ├── sounds
    │   └── style.css
    ├── src
    │   ├── Board.ts
    │   ├── functions.ts
    │   ├── index.ts
    │   ├── MovingObjects.ts
    │   ├── movingObjectsChildren
    │   ├── Settings.ts
    │   ├── StartGame.ts
    │   ├── Travel.ts
    │   ├── travelChildren
    │   └── ValuesBoard.ts
    ├── tsconfig.json
    └── webpack.config.js
```

### Project Index

<details open>
	<summary><b><code>BOULDER_DASH/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			</div>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>Exact package versions for dependency management</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>Project metadata and dependencies list</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>TypeScript compiler configuration</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/webpack.config.js'>webpack.config.js</a></b></td>
					<td style='padding: 8px;'>Webpack bundler setup and build rules</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- public Submodule -->
	<details>
		<summary><b>public</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ public</b></code>
			</div>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/public/bundle.js'>bundle.js</a></b></td>
					<td style='padding: 8px;'>Compiled and bundled JavaScript for the game</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/public/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>Main HTML file and game canvas container</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./boulder_dash/public/style.css'>style.css</a></b></td>
					<td style='padding: 8px;'>Styling for the game UI</td>
				</tr>
			</table>
			<!-- font Submodule -->
			<details>
				<summary><b>font</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ public/font</b></code>
					</div>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='./boulder_dash/public/font/Boulder Dash 6128.ttf'>Boulder Dash 6128.ttf</a></b></td>
							<td style='padding: 8px;'>Custom font used in the game</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			</div>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/Board.ts'>Board.ts</a></b></td>
					<td style='padding: 8px;'>Main game board logic and tile updates</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/functions.ts'>functions.ts</a></b></td>
					<td style='padding: 8px;'>Utility functions for object handling</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/index.ts'>index.ts</a></b></td>
					<td style='padding: 8px;'>Game entry point and runtime init</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/MovingObjects.ts'>MovingObjects.ts</a></b></td>
					<td style='padding: 8px;'>Logic for movable game objects</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/Settings.ts'>Settings.ts</a></b></td>
					<td style='padding: 8px;'>Game configuration and constants</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/StartGame.ts'>StartGame.ts</a></b></td>
					<td style='padding: 8px;'>Starting screen and level setup</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/Travel.ts'>Travel.ts</a></b></td>
					<td style='padding: 8px;'>Collision detection and movement rules</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='./src/ValuesBoard.ts'>ValuesBoard.ts</a></b></td>
					<td style='padding: 8px;'>Tile values and map generation</td>
				</tr>
			</table>
			<!-- movingObjectsChildren Submodule -->
			<details>
				<summary><b>movingObjectsChildren</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src/movingObjectsChildren</b></code>
					</div>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='./src/movingObjectsChildren/MovingEntity.ts'>MovingEntity.ts</a></b></td>
							<td style='padding: 8px;'>Base class for moving entities</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- travelChildren Submodule -->
			<details>
				<summary><b>travelChildren</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src/travelChildren</b></code>
					</div>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='./src/travelChildren/FallingObjects.ts'>FallingObjects.ts</a></b></td>
							<td style='padding: 8px;'>Logic for falling objects and physics</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>

</details>



---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build boulder_dash from the source and intsall dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone ../boulder_dash
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd boulder_dash
   ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->

    <!-- [![npm][npm-shield]][npm-link] -->
    <!-- REFERENCE LINKS -->
    <!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
    <!-- [npm-link]: https://www.npmjs.com/ -->

    **Using [npm](https://www.npmjs.com/):**

    ```sh
    ❯ npm install
    ```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```


---

## Contributing

<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your LOCAL account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone ./boulder_dash
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to LOCAL**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!

---

## License

Boulder_dash is protected under the [LICENSE](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/mit/) file.

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---
