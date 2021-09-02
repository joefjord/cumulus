/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    var $navbarMenu = $(".navbar-menu");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

        getSidebarVisibility.style.visibility = "visible";
        getSidebar.style.overflow = "visible";

        getSidebarLinks.forEach((item, index) => {
            console.log(item);
            item.style.opacity = "1";
            item.style.visibility = "visible";
        });
        getSidebar.style.width = "60%";
        getSidebar.style.overflow = "visible";
        $html.addClass("clicked");
        $navbarMenu.addClass("clicked")
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebarLinks.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transitionDelay = "0s";
            item.style.visibility = "hidden";
        });
        getSidebar.style.overflow = "visible";
        getSidebar.style.width = "0";
        $navbarMenu.removeClass("clicked")
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

/* Modals collected in variables */

var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");

/* Add Clicked Class */

$one.on("click", function (e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function (e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function (e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function (e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function (e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function (e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function (e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function (e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function (e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function (e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function (e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function (e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function (e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function (e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function (e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function (e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function (e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function (e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function (e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function (e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function (e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function (e) {
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $html.removeClass("clicked");
});
