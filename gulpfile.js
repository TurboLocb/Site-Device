import gulp from "gulp"
import cssnano from "gulp-cssnano"
import clean from "gulp-clean"
import babel from "gulp-babel"

const {src, dest, series, parallel} = gulp;

//const clean = clean();

const source = "./src";
const build = "./build";

//Очистить папку "build"
function clear(){
    console.log("Запускаем очистку дериктории:" + build);
    return src(build+"/*", {
        read: false
    })
    .pipe(clean());
}

//Собрать .js файлы
function js(){
    console.log("Запускаем сборку .js файлов");
    return src([source + "/js/**/*.js", source + "/js/**/*.jsx"])
        .pipe(babel({
            
            "presets": [
                [
                  "@babel/preset-env",
                  {
                    "exclude": ["proposal-dynamic-import"],
                    "modules": "auto"
                  }
                ],
                [
                  "@babel/preset-react"
                ]
              ]
        }))
        .pipe(dest(build + "/js/"));
}

//Собрать .css
function css(){
    const path = source + "/css/*.css";
    console.log("Запускаем сборку .css файлов, path: "+ path);
    return src(path)
        .pipe(cssnano()) //минимизирует размер .css файлов
        .pipe(dest(build + "/css/"));
}

//Собрать изображения
function image(){
    console.log("Запускаем сборку изображений");
    return src(source + "/images/**")
        .pipe(dest(build+"/images/"));
}

//Собрать шрифты
function fonts(){
    console.log("Запускаем сборку шрифтов");
    return src(source + "/fonts/*")
        .pipe(dest(build+"/fonts/"));
}

function html(){
    console.log("Запускаем сборку .html");
    return src(source + "/*.html")
        .pipe(dest(build + "/"));
}

gulp.task("build", 
    series(clear, parallel(js, css, image, fonts, html)));
