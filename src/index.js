// ==UserScript==
// @name         Hide Hatena Bookmark Items
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Hatena Bookmark Items as you want.
// @author       muscom
// @match        https://b.hatena.ne.jp/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const hatebu = {};
    hatebu.items = document.querySelectorAll('.entrylist-contents');
    hatebu.ignores = ['blog.livedoor.jp/dqnplus/', 'kabumatome.doorblog.jp'];

    hatebu.items.forEach((item) => {
        const following = item.querySelector('.following-bookmarks-container');
        const article_uri = following ? following.dataset.entryUrl : false;
        if (article_uri) {
            hatebu.ignores.forEach((ignore) => {
                if (article_uri.includes(ignore)) {
                    item.querySelector('.entrylist-contents-main').innerHTML =
                        '';
                }
            });
        }
    });
})();
