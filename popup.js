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
    
    /* console.log(searchInput);
    console.log(popupFormWithSearchButton); */

    searchInput.addEventListener("focus", function(event){

        popupFormWithSearchButton.classList.remove("search-button-hide");

    });

    searchInput.addEventListener("blur", function(event){

        popupFormWithSearchButton.classList.add("search-button-hide");

    });
}

function focusChangeBackgroundLine(){
    /* var delivery = document.getElementById("delivery");    
    var warranty = document.getElementById("warranty");
    var credit = document.getElementById("credit"); */

    var deliveryButton = document.getElementById("delivery-button");
    var warrantyButton = document.getElementById("warranty-button");
    var creditButton = document.getElementById("credit-button");

    var deliveryBackgroundLine = document.getElementById("delivery-line");
    var warrantyBackgroundLine = document.getElementById("warranty-line");
    var creditBackgroundLine = document.getElementById("credit-line");

    console.log(deliveryButton);
    console.log(deliveryBackgroundLine);

    /* Обрабатываем нажатие на "Доставка" */
    deliveryButton.addEventListener("focus", function(event){
        event.preventDefault();

        console.log("Получен фокус на 'Доставке'");
        deliveryBackgroundLine.classList.add("line-change-background-color");
        console.log("");
    });
    deliveryButton.addEventListener("blur", function(event){
        event.preventDefault();

        deliveryBackgroundLine.classList.remove("line-change-background-color");
    });

    /* Обрабатываем нажатие на "Гарантия" */
    warrantyButton.addEventListener("focus", function(event){
        event.preventDefault();

        console.log("Получен фокус на 'Доставке'");
        warrantyBackgroundLine.classList.add("line-change-background-color");
        console.log("");
    });
    warrantyButton.addEventListener("blur", function(event){
        event.preventDefault();

        warrantyBackgroundLine.classList.remove("line-change-background-color");
    });

    /* Обрабатываем нажатие на "Кредит" */
    creditButton.addEventListener("focus", function(event){
        event.preventDefault();

        console.log("Получен фокус на 'Доставке'");
        creditBackgroundLine.classList.add("line-change-background-color");
        console.log("");
    });
    creditButton.addEventListener("blur", function(event){
        event.preventDefault();

        creditBackgroundLine.classList.remove("line-change-background-color");
    });


}

popup();
popupSearchButton();
focusChangeBackgroundLine();