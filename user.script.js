// ==UserScript==
// @name         RepulsBG
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Custom logo + loading screen for repuls.io
// @match        *://repuls.io/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/nyzonix/RepulsBG/main/user.script.js
// @downloadURL  https://raw.githubusercontent.com/nyzonix/RepulsBG/main/user.script.js
// ==/UserScript==
(function() {
    'use strict';

    // --- Image replacement (loader + logo) ---
    const BASE = 'https://raw.githubusercontent.com/nyzonix/RepulsBG/main/images/';
    const ASSETS = {
        loader: { selector: '#loader_img', url: BASE + 'loader.png' },
        logo:   { selector: '#repuls_logo img', url: BASE + 'logo.png' }
    };

    function replaceAll() {
        for (const key in ASSETS) {
            const { selector, url } = ASSETS[key];
            const el = document.querySelector(selector);
            if (el && el.getAttribute('src') !== url) {
                el.src = url;
            }
        }
    }

    replaceAll();

    const observer = new MutationObserver(() => replaceAll());
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // --- Progress bar color ---
    const PROGRESS_BAR = {
        backgroundColor: '#d13840',
        blueSpanBackgroundColor: '#ee404a',
        blueSpanGradientStart: '#ee404a',
        blueSpanGradientEnd: '#ee404a'
    };

    const style = document.createElement('style');
    style.textContent = `
        .progress-bar {
            background-color: ${PROGRESS_BAR.backgroundColor} !important;
        }
        .blue span {
            background-color: ${PROGRESS_BAR.blueSpanBackgroundColor} !important;
            background-image: linear-gradient(to top, ${PROGRESS_BAR.blueSpanGradientStart}, ${PROGRESS_BAR.blueSpanGradientEnd}) !important;
        }
    `;
    document.documentElement.appendChild(style);
})();
