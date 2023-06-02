function catalog(){
    
    /* Каталог и кнопка открытия/закрытия каталога */
    var catalog = document.querySelector(".header-catalog-div");
    var catalogButton = document.querySelector(".catalog-button");

    catalogButton.addEventListener("click", function(){

        if(catalog.classList.contains("catalog-hide") && !catalogButton.classList.contains("catalog-button-animation")){
            catalog.classList.remove("catalog-hide");
            catalogButton.classList.add("catalog-button-animation");
            
            if(catalogButton.classList.contains("catalog-button-reverse-animation")){
                catalogButton.classList.remove("catalog-button-reverse-animation");
            }
        }
        else{
            catalog.classList.add("catalog-hide");
            catalogButton.classList.add("catalog-button-reverse-animation");  
            catalogButton.classList.remove("catalog-button-animation");            
        }

    });

}

/*

    Функция открывания кнопки "Найти" для input'а "Поиск по сайту"
    (скопировано из popup.js)

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

catalog();
popupSearchButton();