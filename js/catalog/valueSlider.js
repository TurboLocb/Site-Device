function valueSlider(){
	var input = document.getElementById("slider-price");
	var priceField = document.getElementById("price-field");
	var inputLine = document.querySelector(".active-line");
	
	try{
		/*
		console.log(input.value);
		console.log(priceField);
		console.log(inputLine);
		*/
		
		priceField.value = "до "+input.value;
		space = input.value / 100;
		
		/* Двигаем priceField совместно с ползунком */
		priceField.style.marginLeft = space + "%";
		/* Изменяем длину active-line */
		inputLine.style.width = space + "%"; /*"calc(\" + space + \"%\" + \"-7px)";*/
		
	}catch(e){
		console.log(e.message);
	}	
}
valueSlider();