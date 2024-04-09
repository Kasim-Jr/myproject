const dt = new Date();
document.getElementById("dateDisplay").innerHTML = dt.toLocaleDateString();

function updateLiveTime() {
    var currentTimeElement = document.getElementById('currentTime');

    var currentTime = new Date().toLocaleTimeString('en-US');
    currentTimeElement.textContent = currentTime;
}

updateLiveTime();
setInterval(updateLiveTime, 1000);

function xcalc() {
    var d = document.getElementById("show");
    if (d.style.display === "block") {
        d.style.display = "none";
        return true;
    }
}
function ShowB() {
    var xs = document.getElementById("showbrowser");
    if (xs.style.display === "none") {
        xs.style.display = "block";
    } else {
        xs.style.display = "none";
    }
}
function Showgame() {
    var xs = document.getElementById("showG");
    if (xs.style.display === "none") {
        xs.style.display = "block";
    } else {
        xs.style.display = "none";
    }
}
function ShowCalc() {
    var xs = document.getElementById("show");
    if (xs.style.display === "none") {
        xs.style.display = "block";
    } else {
        xs.style.display = "none";
    }
}
function clear1() {
    document.getElementById("result").value = "";
    operator = '';
    num1 = '';
    num2 = '';
}
let operator;
let num1 = '';
let num2 = '';

function storeOperator(op) {
    if (operator !== '') {
        equal();
        num1 = result;
        num1 = document.getElementById("result").value;
        num2 = '';
    }
    operator = op;
}

function getNum1() {
    // consle.log('num1', num1);
    document.getElementById("result").value = num1;

} function check() {
    if (operator = '') { return false; } else { return true; }
}


function getNum2() {
    document.getElementById("result").value = num2;

}

function clickButton(num) {
    if (operator) {

        num2 += num;
        getNum2();
    } else {
        num1 += num;
        getNum1();
    }

}

function validNumber(num1, num2) {

    if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100
    ) {
        //  document.getElementById("result").value = "invalid input";

        return true;
    }
    else { return false; }
}
function multiplyBy() {
    num1 = Number(num1);
    num2 = Number(num2);

    //   num1 = document.getElementById("num1").value;
    // num2 = document.getElementById("num2").value;
    if (validNumber(num1, num2) == true) {


        result = num1 * num2;
        document.getElementById("result").value = result;
        num1 = result;
        num2 = '';
        operator = '';
    }
    else {
        document.getElementById("result").value = "";
        alert("inputs must be between 0 and 100");
    }
}
function division() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (validNumber(num1, num2) == true) {
        if (num2 == 0) {

            alert(" num2 can not be zero");
            return;
        }
        result = num1 / num2;
        document.getElementById("result").value = result;
        num1 = result;
        num2 = '';
        operator = '';
    } else {
        document.getElementById("result").value = "";
        alert("inputs must be between 0 and 100");
    }
}

function add() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (validNumber(num1, num2) == true) {
        result = Number(num1) + Number(num2);

        document.getElementById("result").value = result;
        num1 = result;
        num2 = '';
        operator = '';

    } else {
        document.getElementById("result").value = "";
        alert("inputs must be between 0 and 100");
    }
}
function subtraction() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (validNumber(num1, num2) == true) {
        result = num1 - num2;
        document.getElementById("result").value = result;
        num1 = result;
        num2 = '';
        operator = '';

    }
    else {
        document.getElementById("result").value = "";
        alert("inputs must be between 0 and 100");
    }
}
function equal() {

    switch (operator) {
        case "+":
            return add();
        case "-":
            return subtraction();
        case "*":
            return multiplyBy();
        case "/":
            return division();
    }
}
function therectangle() {
    var rectangleElement = document.getElementById('rectangle');
    var computedStyle = window.getComputedStyle(rectangleElement);

    if (computedStyle.display === 'none') {
        rectangleElement.style.display = 'block';
        console.log("open");
    } else if (computedStyle.display === 'block') {
        rectangleElement.style.display = 'none';
        console.log("close");
    }
}
function getkey(event) {

    if (event.key == 'm' || event.key == 'M') {

        therectangle();
    }
}
document.addEventListener('keypress', getkey);
document.addEventListener("DOMContentLoaded", function () {
    var show = document.getElementById("show");
    var isMouseDown = false;
    var offsetX = 0;
    var offsetY = 0;
    show.addEventListener("mousedown", function (e) {
        isMouseDown = true;
        offsetX = e.clientX - show.offsetLeft;
        offsetY = e.clientY - show.offsetTop;
        show.style.cursor = "grabbing";
    });
    document.addEventListener("mouseup", function () {
        isMouseDown = false;
        show.style.cursor = "grab";
    });
    document.addEventListener("mousemove", function se(e) {
        if (isMouseDown) {
            var x = e.clientX - offsetX;
            var y = e.clientY - offsetY;
            if (x <= 0 || x >= 1336 || y >= 454) {
                isMouseDown = false; // Stop dragging
            } else {
                show.style.left = x + "px";
                show.style.top = y + "px";
                let s = "Xelement : " + x + ", Yelement : " + y;
                document.getElementById("detecte").innerHTML = s;
            }
        }
    });
});
function Background() {
    fileinput = document.getElementById('backGround');
    var theimg = fileinput.files[0];
    if (theimg) {
        const img = new FileReader();
        img.onload = function (e) {
            document.body.style.backgroundImage = `url('${e.target.result}')`;
        };
        img.readAsDataURL(theimg);
    }
}

function showweb(event) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "X : " + x + ", Y : " + y;
    document.getElementById("demo").innerHTML = text;
}
function showelement(event) {
    let xs = event.clientX;
    let ys = event.clientY



    var showElement = document.getElementById("show");
    var elementRect = showElement.getBoundingClientRect();


    var elementX = elementRect.left;
    var elementY = elementRect.top;

    let relativeX = xs - elementX;
    let relativeY = ys - elementY;
    let texts = "Xmousecursor : " + relativeX + ", Ymousecursor : " + relativeY;
    document.getElementById("demo2").innerHTML = texts;
}

document.addEventListener("mousemove", function (e) {
    var mousex = e.clientX;
    var mousey = e.clientY;
    let cursor = "X :" + mousex + ", Y :" + mousey;
    document.getElementById("cursorPosition").innerHTML = cursor;

});
var b = document.getElementById("catch");
var isMoving = false;

document.addEventListener("mousemove", function (event) {
    var rect = b.getBoundingClientRect();
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var distanceX = Math.abs(mouseX - rect.left - rect.width);
    var distanceY = Math.abs(mouseY - rect.top - rect.height);

    if (distanceX <= 300 && distanceY <= 300 && !isMoving) {
        isMoving = true;

        var i = Math.floor(Math.random() * 1500);
        var j = Math.floor(Math.random() * 694);

        b.style.transition = "0.3s";
        b.style.transform = "translate(" + i + "px, " + j + "px)";

       let where =   i +  + j;
        document.getElementById("catch").innerHTML = where;

        setTimeout(function () {
            isMoving = false;
        }, 500);
    }
});
document.getElementById("url").addEventListener("submit", function (e) {
    e.preventDefault();
    var link = document.getElementById("theurl").value;

    var iframe = document.getElementById("goResult");
    iframe.src = link;


    // window.location.href = link;

}


);
