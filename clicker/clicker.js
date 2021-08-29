var count = 0;
$(".top").show();

function open() {
    $(".top").hide();
    $(".bottom").show()
};

function increase() {
    $(".top").show();
    $(".bottom").hide();
    count = count + 1;
    $("#counter").text(count);
};

$(document).keydown(open);
$(document).keyup(increase);

$("#clickarea").mousedown(open);
$("#clickarea").mouseup(increase);
