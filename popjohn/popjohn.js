var count = 0;
$(".top").show();

function open() {
    $(".top").hide();
    $(".bottom").show()
};

function increase() {
    $(".top").show();
    count = count + 1;
    $("#counter").text(count);
};

$(document).keydown(open);
$(document).keyup(increase);

$(document).mousedown(function() {
    $(".top").hide();
});
$("#clickarea").mouseup(increase);
