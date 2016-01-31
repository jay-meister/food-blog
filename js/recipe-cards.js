var arr = document.getElementsByClassName('recipe-card');

for (var i = 0; i < arr.length; i++){
    arr[i].addEventListener('mouseenter', function(event){
        console.log(event.target.childNodes[3].style.top = "-5px");
    });
    arr[i].addEventListener('mouseleave', function(event){
        console.log(event.target.childNodes[3].style.top = "117px");
                //this.classList.toggle("recipe-card");
    });

}

// .forEach(function(item){
//     item.addEventListener('mouseover', function(event){
//         console.log(event);
//         console.log(event.target);
//         console.log(this);
//     });
// });
