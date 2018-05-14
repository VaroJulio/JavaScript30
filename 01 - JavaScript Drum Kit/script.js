//Con JQuery
//(function($){
(function(){
    
    'use strict'

    function itMustSounds(e){
        const audio = document.querySelector("audio[data-key='"+e.keyCode.toString()+"']");
        const key = document.querySelector(".key[data-key='"+e.keyCode.toString()+"']");
        if(!audio) return
        audio.currentTime= 0;
        audio.play();
        key.classList.add("playing");
    }

    function removeAnimation(e){
        if(e.propertyName !== "transform") return;
        const keyPlaying = document.querySelectorAll(".playing");
        keyPlaying.forEach(item => item.classList.remove("playing"));
    }

    function configFinalEvents(){
        const keys = document.querySelectorAll(".key");
        keys.forEach(item => item.addEventListener('transitionend', removeAnimation));
    }

    function configInitialEvents(){
        //window.onkeydown= itMustSounds;
        window.addEventListener('keydown', itMustSounds);
    }

    function initiation(){
        configInitialEvents();
        configFinalEvents();
    }

    (function(){
        initiation();
    })();

    // Con JQuery
    //$(function(){
    //    initiation();
    //});

// Con JQuery
//})(window.$);
})();
