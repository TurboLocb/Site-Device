/* Скрипт по переключению слайдов */ 
function slideChange(){
/* Див с радиокнопками */
var radioButtons = document.querySelector(".products-buttons-radiobutton-div");

/* Слайды */
var slideFirst = document.querySelector(".products-description-one");
var slideSecond = document.querySelector(".products-description-two");
var slideThird = document.querySelector(".products-description-three");

/* Радиокнопки */
var radiobuttonFirst = radioButtons.querySelector("[value=first-slide]");
var radiobuttonSecond = radioButtons.querySelector("[value=second-slide]");
var radiobuttonThird = radioButtons.querySelector("[value=third-slide]");

/* Обработка нажатий на радиокнопки */
radiobuttonFirst.addEventListener("click", function(evt){

    slideFirst.classList.remove("hide-slide");

    slideSecond.classList.add("hide-slide");
    slideThird.classList.add("hide-slide");
});

radiobuttonSecond.addEventListener("click", function(evt){

    slideSecond.classList.remove("hide-slide");

    slideFirst.classList.add("hide-slide");
    slideThird.classList.add("hide-slide");   
});

radiobuttonThird.addEventListener("click", function(evt){

    slideThird.classList.remove("hide-slide");

    slideSecond.classList.add("hide-slide");
    slideFirst.classList.add("hide-slide");
});

}

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

slideChange();
catalog();