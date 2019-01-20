$(document).ready(function () {
    let count = 0;
    $('.click').click(function () {
        $('*').removeClass('win');
        $('.card-good, .card-wrong').css('display', 'none');
        let randClass = Math.floor(Math.random() * 3);
        let elements = [".first", ".second", ".third"];
        $(elements[randClass]).addClass("win");
        $('.card').removeAttr('disabled');
        $(this).html('LOSUJ DALEJ!');
        $('.commands').html('Wybierz i losuj!');
    });
    $('.counter').click(function(){
        $(this).html('0');
        count = 0;
    });
    $('.first,.second,.third').click(function () {
        if ($(this).hasClass('win')) {
            count++;
            $('.counter').html(count);
            $('.card').attr("disabled", "disabled");
        }
        else {
            $('.commands').html('Zla karta!');
            $('.card').attr("disabled", "disabled");
            $('.card-wrong').css('display', 'block')
        };
        if (count == 5) {
            $('.commands').html("Wygrales! Graj dalej");
        };
    });
    $('.info-slider').click(function(){
        $('.info').slideToggle();
    })
})