const saveBtnEl = $('.fa-save');
const textAreaEl = $('.text-area');

var currentHour = moment().hours(); //retrive current hour
var len = textAreaEl.length

//Current time output to HTML. Updates every second//
setInterval(function () {
    $('#currentDay').text(moment().format('LLLL'));
}, 1000);

//console log on save click event
$(textAreaEl).click(function () {
    console.log(parseInt($(this).attr("data-time")));
});

function setBackground() {
    for (var i = 8; i < len; i++) {
        if ($(textAreaEl).data('data-time') === 8) {
            $(this).removeClass('future present').addClass('past');
        } else if ($(textAreaEl).data('time') === 9) {
            $(this).removeClass('future past').addClass('present');
        } else if ($(textAreaEl).data('time') === 10) {
            $(this).removeClass('present past').addClass('future');
        }
    }
};

setBackground();