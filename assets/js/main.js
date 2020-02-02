const saveBtnEl = $('.fa-save');
const textAreaEl = $('.text-area');

var currentHour = moment().hours(); //retrive current hour


//Current time output to HTML. Updates every second//
setInterval(function () {
    $('#currentDay').text(moment().format('LLLL'));
}, 1000);

//console log on save click event
$(textAreaEl).click(function () {
    console.log(parseInt($(this).attr("data-time")));
});


function setBackground() {
    if ($("[data-time = 8]")) {
        $(textAreaEl).removeClass('future present').addClass('past');
     } else if ($("[data-time = 9]")){
         $(textAreaEl).removeClass('future past').addClass('present');
     } else if ($("[data-time = 10]")){
         $(textAreaEl).removeClass('present past').addClass('future');
     }
};

setBackground();

console.log($("[data-time = '8']"))