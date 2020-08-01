document.addEventListener("DOMContentLoaded", function(){
    var duoi100 = true;
    var menu = document.querySelector(".menubar");
    var mauchu = document.querySelectorAll("#menu ul li");
    
    window.addEventListener("scroll", function(){
        if(window.pageYOffset > 99){
            if(duoi100 == true){
                duoi100 = false;
                menu.classList.add("doimenu");
                for (let i = 0; i < mauchu.length; i++) {
                    mauchu[i].classList.add("doimau");
                }
            }
        }
        else if(window.pageYOffset <= 100){
            if(duoi100 == false){
                duoi100 = true;
                menu.classList.remove("doimenu");
                for (let i = 0; i < mauchu.length; i++) {
                    mauchu[i].classList.remove("doimau");
                }
            }
        }
        
    });
}, false);