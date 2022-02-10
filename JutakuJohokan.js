// ==UserScript==
// @name         Auto 住宅情報館
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jutakujohokan.ownly.jp/lot/17874
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ownly.jp
// @grant        none
// ==/UserScript==

(function() {
    const ele = document.querySelector("div[id='entry_button_area'] a");
    if(ele!=null){
        login('lot/draw/17874');
        _create_login_request('line', after_login_action_path, after_login_callback_function, after_login_return_url);
    }else location.reload();
})();