    function Press(ele,sec=1){
        ele = document.querySelector(ele);
        if(ele!=null){
            setTimeout(() => {
                ele.click();
            }, parseInt(sec)*1000);
        }
    }
    function VideoEnd(ele){
        ele = document.querySelector(ele);
        if(ele!=null){
            ele.currentTime=ele.duration-0.01;
            ele.play();
        }
    }

    setTimeout(() => {
        Press("div[class='login_button login_button_ln'] a",3);
        VideoEnd("video[id='entry_movie']",0);
        Press("a[id='em_button']",1);
    }, 100);
