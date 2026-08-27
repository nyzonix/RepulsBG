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
            if (el && !el.src.includes(url)) {
                el.src = url;
            }
        }
    }

    reemplazarTodo();

    const observer = new MutationObserver(() => reemplazarTodo());
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src']
    });

    setInterval(reemplazarTodo, 200);

    const originalDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
    Object.defineProperty(HTMLImageElement.prototype, 'src', {
        set: function(value) {
            for (const key in ASSETS) {
                const { selector, url } = ASSETS[key];
                if (this.matches && this.matches(selector) && !value.includes(url)) {
                    originalDescriptor.set.call(this, url);
                    return;
                }
            }
            originalDescriptor.set.call(this, value);
        },
        get: originalDescriptor.get,
        configurable: true
    });
})();