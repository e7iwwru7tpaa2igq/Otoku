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
    function Press(ele,sec=1){
        const ele = document.querySelector(ele);

        if(ele!=null){
            setTimeout(() => {
                ele.click();
            }, parseInt(sec)*1000);
        }
    }
    function VideoEnd(ele){
        const obj = document.querySelector(ele);

        if(obj!=null){
            obj.currentTime=ele.duration-0.01;
            obj.play();
        }
    }

    const mov = document.querySelector("video[id='entry_movie']")
    if(mov===null){
        mov.currentTime=mov.duration-0.01;
        mov.play();
        Press("a[id='em_button']",1);
    }else{
        Press("div[class='login_button login_button_ln'] a",0);
    }
})();
