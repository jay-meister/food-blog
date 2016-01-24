document.getElementById('hamburger-button').addEventListener('click', function(event){

    console.log(document.getElementsByClassName('ul-nav-menu'));
    document.getElementsByClassName('ul-nav-menu')[0].classList.toggle('show');

});
