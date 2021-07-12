var localStor7 = localStorage.getItem("0700");
var localStor8 = localStorage.getItem("0800");
var localStor9 = localStorage.getItem("0900");
var localStor10 = localStorage.getItem("1000");
var localStor11 = localStorage.getItem("1100");
var localStor12 = localStorage.getItem("1200");
var localStor13 = localStorage.getItem("1300");
var localStor14 = localStorage.getItem("1400");
var localStor15 = localStorage.getItem("1500");
var localStor16 = localStorage.getItem("1600");
var localStor17 = localStorage.getItem("1700");
var localStor18 = localStorage.getItem("1800");

var input7 = $("#hr-7");
var input8 = $("#hr-8");
var input9 = $("#hr-9");
var input10 = $("#hr-10");
var input11 = $("#hr-11");
var input12 = $("#hr-12");
var input13 = $("#hr-13");
var input14 = $("#hr-14");
var input15 = $("#hr-15");
var input16 = $("#hr-16");
var input17 = $("#hr-17");
var input18 = $("#hr-18");

input7.val(localStor7);
input8.val(localStor8);
input9.val(localStor9);
input10.val(localStor10);
input11.val(localStor11);
input12.val(localStor12);
input13.val(localStor13);
input14.val(localStor14);
input15.val(localStor15);
input16.val(localStor16);
input17.val(localStor17);
input18.val(localStor18)

var date = moment().format("dddd, MMMM Do, YYYY");

$("#currentDay").text(date);

function time() {

    var currentHour = moment().hours();

    $(".block").each(function () {

        var hour = parseInt($(this).attr("id"));

        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

time();

$(".saveButton").on("click", function (event) {
    event.preventDefault();

    var input = $(this).prev();
    var id = input.attr("id");
    var value = input.val();
  
    localStorage.setItem(id, value);
});