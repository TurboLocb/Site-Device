import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';

const root = ReactDOM.createRoot(document.getElementById("products-plate"));

const element = 
<div class="item">
    <div class="add-item">
        <button class="in-backet-button show-button">В корзину</button>
    </div>
    <div>
        <p class="item-description">Любительская селфи палка</p>
        <p class="item-price">500 руб.</p>
    </div>
</div>

console.log("Рендерим react элемент");

root.render(element);