$(function () {
    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 12690,
        values: [
            1250, 5550
        ],
        /* 

    Данная функция отслеживает события слайдера

    */
        slide: function (event, ui) {
            $("#amount-left").val("от " + ui.values[0]);
            $("#amount-right").val("до " + ui.values[1]);

            var left = $(this).find('.ui-slider-handle:first').attr("style");
            var right = $(this).find('.ui-slider-handle + .ui-slider-handle').attr("style");

            /* Получаем значение 'left' у левого ползунка */
            var firstSplitForLeftSlide = left.split(":");
            var secondSplitForLeftSlide = firstSplitForLeftSlide[1].split(";");

            /* Получаем значение 'left' у правого ползунка */
            var firstSplitForRightSlide = right.split(":");
            var secondSplitForRightSlide = firstSplitForRightSlide[1].split(";");

            $("#amount-left").css("left", secondSplitForLeftSlide[0]);
            $("#amount-right").css("left", secondSplitForRightSlide[0]);
        }

    });
    /* 

        Данный код необходим для получения значений слайдера при 
        первоначальной загрузки страницы

    */
    $("#amount-left").val("от " + $("#slider-range").slider("values", 0));
    $("#amount-right").val("до " + $("#slider-range").slider("values", 1));

    var leftFirst = $(this).find('.ui-slider-handle:first').attr("style");
    var rightFirst = $(this).find('.ui-slider-handle + .ui-slider-handle').attr("style");

    /* Получаем значение 'left' у левого ползунка */
    let firstSplitForLeftSlideFirst = leftFirst.split(":");
    let secondSplitForLeftSlideFirst = firstSplitForLeftSlideFirst[1].split(";");

    /* Получаем значение 'left' у правого ползунка */
    let firstSplitForRightSlideFirst = rightFirst.split(":");
    let secondSplitForRightSlideFirst = firstSplitForRightSlideFirst[1].split(";");

    $("#amount-left").css("left", secondSplitForLeftSlideFirst[0]);
    $("#amount-right").css("left", secondSplitForRightSlideFirst[0]);
});
