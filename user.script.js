// ==UserScript==
// @name         RepulsBG
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        *://repuls.io/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/nyzonix/RepulsBG/main/user.script.js
// @downloadURL  https://raw.githubusercontent.com/nyzonix/RepulsBG/main/user.script.js
// ==/UserScript==

(function() {
    'use strict';

    const BASE = 'https://raw.githubusercontent.com/nyzonix/RepulsBG/main/images';

    const ASSETS = {
        loader: { selector: '#loader_img',     url: BASE + 'loader.png' },
        logo:   { selector: '#repuls_logo img', url: BASE + 'logo.png' }
    };

    function reemplazarTodo() {
        for (const key in ASSETS) {
            const { selector, url } = ASSETS[key];
            const el = document.querySelector(selector);
            if (el && el.getAttribute('src') !== url) {
                el.src = url;
            }
        }
    }

    reemplazarTodo();

    const observer = new MutationObserver(() => reemplazarTodo());
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
