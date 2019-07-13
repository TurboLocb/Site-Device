/* 
    Функция, которая выводит значение input в поле range-value
    (применяется в слайдере с ценами на вкладке "Каталог")
*/
function inputRange(){
    var input = document.getElementById("inputRange");
    var inputValue = document.getElementById("rangeValue");

    /* Устанавливаем значение из input в inputValue*/
    inputValue.value = "до " + input.value;
    
    /* Изменяем длину зеленой линии в input */
    var tab = input.value / 100;
    inputValue.style.marginLeft = tab + "%";
}
inputRange();