// ==UserScript==
// @name         Auto Giftee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gcp.giftee.biz/*
// @icon         https://www.google.com/s2/favicons&domain=gcp.giftee.biz
// @grant        none
// ==/UserScript==

(function() {
    function Press(str,sec=0){
        try{
            setTimeout(() => {
                document.evaluate(str,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null).snapshotItem(0).click();
            }, parseInt(sec)*1000);
        }catch (e){};
    }
    function AttrChange(str,type=1){
        try{
            const obj = document.evaluate(str,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null).snapshotItem(0);

            switch(type){
                case 1: //Enable Node
                    obj.disabled=false;
                    break;

                default:
                    break;
            }
        }catch (e){};
    };

    Press("//a[.//span[contains(text(),'応募する')]]");
    AttrChange("//input[contains(@value,'次へ')]",1); //Enable Node
    Press("//input[contains(@value,'次へ')]");
    Press("//a[contains(text(),'結果をみる')]");
    Press("//a[.//[contains(text(),'ギフトを表示')]]");
})();
