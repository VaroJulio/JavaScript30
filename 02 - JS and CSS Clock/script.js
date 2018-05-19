(function(){
    
    'use strict'

    function setDate(){
        let date = new Date();
        let hours = 90 + ((date.getHours() / 12) * 360);
        let minutes = 90 + ((date.getMinutes() /60) * 360);
        let seconds = 90 + ((date.getSeconds() /60) * 360);
        document.getElementsByClassName("second-hand")[0].style.transform="rotate("+seconds+"deg)";
        document.getElementsByClassName("min-hand")[0].style.transform="rotate("+minutes+"deg)";
        document.getElementsByClassName("hour-hand")[0].style.transform="rotate("+hours+"deg)";
    }

    function initiation(){
        setInterval(setDate, 1000);
    }

    (function(){
        initiation();
    })();

})();