// ==UserScript==
// @name         Auto LINE Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://access.line.me/*
// @icon         https://www.google.com/s2/favicons?domain=points.line.me
// @grant        none
// ==/UserScript==

(function() {
/*
    function Press(ele,sec=1){
        ele = document.querySelector(ele);
        if(ele!=null){
            setTimeout(() => {
                ele.click();
            }, parseInt(sec)*1000);
        }
    }

    Press("button[type='submit']",0);
*/
    document.querySelector("button[type='submit']").click();
})();
