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

catalog();