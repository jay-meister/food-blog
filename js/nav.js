

//add a moving menu bar
var toggle = false;


document.getElementById('nav-icon4').addEventListener('click', function(event){
    this.classList.toggle('open');
    document.getElementsByClassName('ul-nav-menu')[0].classList.toggle('show');
});
