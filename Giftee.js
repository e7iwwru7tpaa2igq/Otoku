// ==UserScript==
// @name         Auto Giftee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gcp.giftee.biz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gcp.giftee.biz
// @grant        none
// ==/UserScript==

(function() {
    function ObjXPath(str){
        const obj = document.evaluate(str,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

        if(!obj===null){
            return obj.snapshotItem(0);
        }else return null;
    };

    ObjXPath("//a[.//span[contains(text(),'応募する')]]").click();
/*
    function Press(ele,sec=0){
        if(!ele===null){
            setTimeout(() => {
                ele.click();
            }, parseInt(sec)*1000);
        }
    }
*/
})();
