var currentDay = $('#currentDay')
currentDay.text(moment().format("dddd, MMMM Do"))

var currentHour = parseInt(moment().format('H'));

$(".description").each(function () {
    var plannerHour = parseInt($(this).attr("data-hour"));

    var task = localStorage.getItem(plannerHour)
    $(this).val(task)

    if (plannerHour < currentHour) {
        $(this).addClass("past");

    } else if (plannerHour === currentHour) {
        $(this).addClass("present");
        
    } else {
        $(this).addClass("future");
    }
})

$(".saveBtn").click(function () {
    var box = $(this).siblings(".description")
    var task = box.val()

    localStorage.setItem(box.attr("data-hour"), task)
})