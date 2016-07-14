
    var xts = document.getElementById('myForm');
    xts.addEventListener('focusin', myFocusFunction);
    xts.addEventListener('focusout', myBlurFunction);

    function myFocusFunction() {
        document.getElementById('myText').style.backgroundColor = "yellow";
    }

    function myBlurFunction() {
        document.getElementById('myText').style.backgroundColor = "";
    }