var i = 0;
var txt = "Chess@Brown";
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector("h1").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
$("h1").addClass("emphasis")