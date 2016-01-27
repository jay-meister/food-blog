

//add a moving menu bar
var toggle = false;
document.getElementById('hamburger-button').addEventListener('click', function(event){
    //toggle class .show
    document.getElementsByClassName('ul-nav-menu')[0].classList.toggle('show');
    //toggle image for hamburger-button

});
