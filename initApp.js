import express from "express";

//подключаем express
//const express = createRequere("express");

//объект приложения
const app = express();

//главная страница
app.use(express.static("./build"));

//
app.listen(3000, () =>{
    console.log("Express сервер запустился на <http://localhost:3000>");
});