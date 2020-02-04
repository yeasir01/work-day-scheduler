var currentHour = moment().hours(); //retrives current hour

//set intial time on page load
timerInterval();

//set intial background colors on page load
setBackground();

//Function runs to check if attribute "data-time" is <=> current time, if so set the appropriate class based on time.
function setBackground() {
    $(".time-row").each(function () {
        var blockHour = parseInt($(this).data('time'));

        if (blockHour < currentHour) {
            $(this).find('.text-area').removeClass('present future').addClass('past');

        } else if (blockHour === currentHour) {
            $(this).find('.text-area').removeClass('past future').addClass('present');

        } else if (blockHour > currentHour) {
            $(this).find('.text-area').removeClass('past present').addClass('future');
        }
    });
};

//Funtion to update jumbotron date/time
function timerInterval() {
    $('#currentDay').text(moment().format('LLLL'));
}

//run setBackground function every 3 seconds
setInterval(setBackground, 3000);

//run timerInterval function every 1 seconds
setInterval(timerInterval, 1000);

//Save value of key index & text content to local storage
$(".saveBtn").on("click", function () {
    var key = $(this).parent().data('time');
    var value = $(this).parent().find('.text-area').val();
    localStorage.setItem(key, value); //save in local storage
});

//Load saved data from local storage to textarea (was not able to get for loop to work for this)
$('[data-time="8"]').find("textarea").val(localStorage.getItem("8"));   
$('[data-time="9"]').find("textarea").val(localStorage.getItem("9"));
$('[data-time="10"]').find("textarea").val(localStorage.getItem("10"));
$('[data-time="11"]').find("textarea").val(localStorage.getItem("11"));
$('[data-time="12"]').find("textarea").val(localStorage.getItem("12"));
$('[data-time="13"]').find("textarea").val(localStorage.getItem("13"));
$('[data-time="14"]').find("textarea").val(localStorage.getItem("14"));
$('[data-time="15"]').find("textarea").val(localStorage.getItem("15"));
$('[data-time="16"]').find("textarea").val(localStorage.getItem("16"));
$('[data-time="17"]').find("textarea").val(localStorage.getItem("17"));