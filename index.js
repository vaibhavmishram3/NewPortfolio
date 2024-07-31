function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function(){
    scroll();
};

function scroll(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;

    var a = document.querySelector(".progress-bar").style.width = scrolled + "%";
    // console.log(winScroll);
}
