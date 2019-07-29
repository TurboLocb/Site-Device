function slide(){
    var input = document.getElementById("inputRange");
    var inputText = document.getElementById("valueBlock");
    var inputLine = document.querySelector(".active-line");    

    inputText.value = "до " + input.value;

    var tab = input.value / 100;
    // Двигаем inputText совместно с ползунком в input
    inputText.style.marginLeft = tab+"%";
    // Изменяем длину зеленой линии совместно с ползунком
    inputLine.style.width = tab+"%";
	
	var a = "\"calc(" + space + % + "-7px)";
	console.log(a);
	console.log(tab+"%");
}

slide();