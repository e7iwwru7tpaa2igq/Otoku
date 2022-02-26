// ==UserScript==
// @name         Auto Suntory Campaign
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://webcp.suntory.co.jp/*
// @icon         https://www.google.com/s2/favicons?domain=suntory.co.jp
// @grant        none
// ==/UserScript==

(function() {
    function Press(ele,sec=1){
        ele = document.querySelector(ele);
        if(ele!=null){
            setTimeout(() => {
                ele.click();
            }, parseInt(sec)*1000);
        }
    }

    let ele;
    
    Press("label[for='consent']",0);
    Press("label[for='robot']",0);
    //Press("div[class='inner'] a",0);
    Press("input[name='prize_grp_id2']",0);
    Press("ul[id='lot-answer-action'] li span",0);
    Press("a[id='sns_post']",0);
    Press("div[class='entry'] a",15);
})();
