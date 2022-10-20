function format(t) {
    return (t < 10 ? "0" + t : t);
}

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

function updateTime() {
    let date = new Date();
    let hh = format(date.getHours());
    let mm = format(date.getMinutes());

    document.getElementById("info-clock").innerText = hh + ":" + mm;
    setTimeout(function(){updateTime()}, 1000);
}

function logoffTimestamp() {
    let date = new Date();
    let hh = format(date.getHours());
    let mm = format(date.getMinutes());
    let ss = format(date.getSeconds());
    let MMM = months[date.getMonth()];
    let dd = date.getDate();
    let YYYY = date.getFullYear();

    document.getElementById("logoff-timestamp").innerText =
        hh + ":" + mm + ":" + ss + " ON " + MMM + " " + dd + ", " + YYYY;
}

let cats = 0;

function createCat() {
    cats += 1;
    if (cats === 69)
        window.location = "cat-overload.html";
    document.getElementById("cat-counter").innerText = cats;
}

function parseCommand() {
    let form = document.getElementById("command-form");
    let input = form.elements[0].value;
    if (document.getElementsByTagName("title")[0].innerText === "WEB/SPF") {
        switch (input.toLowerCase()) {
            case "0":
                window.location = "about.html";
                break;
            case "c":
                createCat();
                break;
            case "m":
                window.location = "https://github.com/lilygomes/";
                break;
            case "exit":
                window.location = "logged-out.html";
                break;
            case "x":
                window.location = "logged-out.html";
                break;
            default:
                document.getElementById("invalid-option").innerText = "Invalid option";
                break;
        }
    } else {
        switch (input.toLowerCase()) {
            case "exit":
                window.location = "index.html"
                break;
            default:
                document.getElementById("invalid-option").innerText = "Invalid option";
                break;
        }
    }
}