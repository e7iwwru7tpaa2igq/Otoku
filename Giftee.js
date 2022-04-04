// ==UserScript==
// @name         Auto Kirin Campaign
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cp.kirin.jp/lot/*
// @icon         https://www.google.com/s2/favicons?domain=cp.kirin.jp
// @grant        none
// ==/UserScript==

(function() {
    function Press(ele,sec=0){
        const obj = document.querySelector(ele);

        if(obj!=null){
            setTimeout(() => {
                obj.click();
            }, parseInt(sec)*1000);
        }
    }

    Press("a[class='ui labeled icon primary button line-button ']");
})();
