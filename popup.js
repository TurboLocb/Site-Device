/* 
    
    Функция для открывания формы "Напиши нам"

 */ 

function popup(){

    var popupForm = document.querySelector(".write-us-popup");
    var popupButtonOpen = document.getElementById("OpenPopupButton");
    var popupButtonClose = popupForm.querySelector(".write-us-popup-close-button");

    /* console.log(popupForm);
    console.log(popupButtonOpen);
    console.log(popupButtonClose); */


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

/*

    Функция открывания кнопки "Найти" для input'а "Поиск по сайту"
  
 */

function popupSearchButton(){

    var searchInput = document.getElementById("headerInput");
    var popupFormWithSearchButton = document.querySelector(".header-first-div-inner-inside-right");
    
    console.log(searchInput);
    console.log(popupFormWithSearchButton);

    searchInput.addEventListener("focus", function(event){

        popupFormWithSearchButton.classList.remove("search-button-hide");

    });

    searchInput.addEventListener("blur", function(event){

        popupFormWithSearchButton.classList.add("search-button-hide");

    });



}

popup();
popupSearchButton()