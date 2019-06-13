/* 
	
	Функция обрабатывает opacity кнопки "В корзину" 
	в div'е "add-item"
	
*/
function myMouseOver(){
	var addItemDiv = document.querySelector(".add-item");
	var addItemButton = addItemDiv.querySelector(".in-backet-button");	
	
	addItemButton.style.opacity = "1";	
}

