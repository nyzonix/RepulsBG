# RepulsBG

Customize your Repuls logo + Loading screen + progress bar colors via JS code injection.

# Features

- 🖼️ Replace the loading screen background image
- 🎮 Replace the main menu logo
- 🎨 Customize the progress bar colors (track and fill gradient)
- 🔄 Auto-updates via Tampermonkey when this repo is updated

# How to apply a theme

1. Install the browser extension "Tampermonkey"
   [Tampermonkey for Chromium based browsers](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
[Tampermonkey for Firefox](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. Extra steps only for Chromium based browsers
   - 2.1 Enable developer mode:
   <img width="2860" height="678" alt="image" src="https://github.com/user-attachments/assets/b9229265-a094-41e5-9b7f-94d9a31e77cc" />

   Chrome versions 138+ also require you to allow user scripts
   - 2.2  Then go right-click the Tampermonkey icon from the extensions toolbar (the puzzle icon)
   - 2.3  Click on "Manage extension"
   - 2.4  Activate "Allow User Scripts"
   [Tampermonkey's FAQ](https://www.tampermonkey.net/faq.php?q=Q209#Q209)

3. Open the Tampermonkey extension, click on "Create a new script"
<img width="240" alt="Screenshot 2025-04-18 at 3 27 28 PM" src="https://github.com/user-attachments/assets/5c514b8b-8551-410b-b35f-d500963166d7" />

4. Delete all the deffault code
5. Paste your theme's JS code, in case you don't know how to code a theme or you don't have acces to any theme's code try [This one](https://raw.githubusercontent.com/nyzonix/RepulsBG/main/user.script.js)
(Copy all the code in there and paste it on the Tampermonkey empty script)

6. Press Crtl + S to save and open [Repuls.io](https://repuls.io) to test it!

# How create a theme

## Default Assets

By default, the script loads its assets from the `images/` folder in this repository:

| Element         | File               | Recommended size / aspect ratio |
|-----------------|--------------------|----------------------------------|
| Loading screen  | `images/loader.png`| ~683:869 (portrait)              |
| Logo            | `images/logo.png`  | Any (scales to container width)  |


### 1. Fork this repository
### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/RepulsBG.git
cd RepulsBG
```


### 3. Replace the images
Drop your own images into the `images/` folder, using the **same filenames** as the originals so the script picks them up automatically:

```
images/
├── loader.png   # replaces the loading screen background
└── logo.png     # replaces the main menu logo
```

> **Tip:** for best results, keep `loader.png` close to a **683:869** aspect ratio (portrait) to avoid letterboxing or cropping when it's displayed in-game.

### 4. (Optional) Customize the progress bar colors

Open `user.script.js` and edit the `PROGRESS_BAR` object:

```javascript
const PROGRESS_BAR = {
    backgroundColor: '#00eaff80',      // track (empty bar) color
    blueSpanBackgroundColor: '#ff00e7', // fill base color
    blueSpanGradientStart: '#387eff',   // fill gradient start
    blueSpanGradientEnd: '#5d63ab'      // fill gradient end
};
```

Any valid CSS color (hex, `rgb()`, `rgba()`) works here.

### 5. Point the script to your own fork

In the same `user.script.js`, update the `BASE` constant and the `@updateURL` / `@downloadURL` headers to point to **your** repository instead of the original:

```javascript
// ==UserScript==
// @updateURL    https://raw.githubusercontent.com/YOUR_USERNAME/RepulsBG/main/user.script.js
// @downloadURL  https://raw.githubusercontent.com/YOUR_USERNAME/RepulsBG/main/user.script.js
// ==/UserScript==

const BASE = 'https://raw.githubusercontent.com/YOUR_USERNAME/RepulsBG/main/images/';
```

This ensures the script loads your images from your fork, and that Tampermonkey checks *your* repo for future updates — not the original one.

### 6. Commit and push


### 7. Install your version
Go up and read the section called "How to apply a theme", instead of copying my code into Tampermonkey copy yours. 

## License

MIT — feel free to fork, modify, and share your own themes.
