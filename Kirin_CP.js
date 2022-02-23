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
        ele = document.querySelector(ele);
        if(ele!=null){
            setTimeout(() => {
                ele.click();
            }, parseInt(sec)*1000);
        }
    }
    function ChangeClass(ele,newcn,opt=1){
        ele = document.querySelector(ele);
        if(ele!=null){
            if(opt===1){
                ele.className=newcn;
            }else ele.className+=newcn;
        }
    }

    Press("div[class='login_button login_button_ln'] a",2);
    ChangeClass("a[id='em_button']","");
    Press("a[id='em_button']",0);
})();
