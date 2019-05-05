/* 
    
    Функция для открывания формы "Напиши нам"

 */ 

function popup(){

    var popupForm = document.querySelector(".write-us-popup");
    var popupButtonOpen = document.getElementById("OpenPopupButton");
    var popupButtonClose = popupForm.querySelector(".write-us-popup-close-button");

    console.log(popupForm);
    console.log(popupButtonOpen);
    console.log(popupButtonClose);


    popupButtonOpen.addEventListener("click", function(evt){

        evt.preventDefault();

        if(popupForm.classList.contains("popup-hide")){
            popupForm.classList.remove("popup-hide");
        }

    });

    popupButtonClose.addEventListener("click", function(evt){

        evt.preventDefault();

        if(!popupForm.classList.contains("popup-hide")){
            popupForm.classList.add("popup-hide");
        }

    });

}

popup();