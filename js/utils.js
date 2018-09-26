//gifffer
window.onload = function() {
    Gifffer();
}

// smoothscroll
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}
function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 20);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

//header sticks on top after scroll
window.onscroll = function changeClass(){
    var scrollPositionY = window.pageYOffset | document.body.scrollTop;
    if(scrollPositionY > 0) {
        mainHeader.className = ('main-header alternate fixed-header header-inverse');
        logoBoxBasic.className = ("logo-box hide-me")
        logoBoxInverse.className = ("logo-box")
        freeTrialButtonInverse.className = ("theme-btn btn-style-one")
        freeTrialButton.className = ("theme-btn btn-style-one hide-me")
        navbarToggler.className = ("navbar-toggle scrolled");

    } 
    else if(scrollPositionY == 0) {
        mainHeader.className =  ('main-header alternate');
        logoBoxBasic.className = ("logo-box")
        logoBoxInverse.className = ("logo-box hide-me")
        freeTrialButtonInverse.className = ("theme-btn btn-style-one hide-me")
        freeTrialButton.className = ("theme-btn btn-style-one")
        navbarToggler.className = ("navbar-toggle ");

    }
        
}
function showMobileMenu(){
    if(mojeDropdown.className == "hide-me"){
        mojeDropdown.className = ""
        var scrollPositionY = window.pageYOffset | document.body.scrollTop;
    }
    else {
        mojeDropdown.className = "hide-me"
        var scrollPositionY = window.pageYOffset | document.body.scrollTop;
    }
}
function loadScript(url, callback){
    var script = document.createElement("script")
    script.id = "testissimo"
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    }

    window.onTestissimo = function(testissimo){
        console.log(testissimo)

    }