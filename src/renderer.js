const mes = document.getElementById("message");
const tit = document.getElementById("title");
const box = document.getElementById("box");



var isNotified = false;

window.electron.handelUrl((_event, url) => {

    let message = "Null";
    let title = "Notification";
    let type = "Null";
    let la = 0.00;
    let lo = 0.00;
    let urls;

    url = url.slice(1);

    urls = url.split("&");

    urls.forEach(url => {
        if (url.slice(0, 2) == "m=") {
            message = decodeURIComponent(url.slice(2));
        }
        if (url.slice(0, 2) == "h=") {
            title = decodeURIComponent(url.slice(2));
        } 
        if (url.slice(0, 2) == "t=") {
            type = decodeURIComponent(url.slice(2));
        }
        if (url.slice(0, 3) == "la=") {
            la = Number(decodeURIComponent(url.slice(3)));
        }
        if (url.slice(0, 3) == "lo=") {
            lo = Number(decodeURIComponent(url.slice(3)));
        }
    });

    if (message != "Null" && !isNotified) {
        switch (type.toLocaleLowerCase()) {
            case "box":
                boxNotify(message, title);
                break;
        
            case "map":
                mapNotify(message, title, la, lo);
                break;
    
            default:
                boxNotify(message, title);
                break;
        }
    }
});

function boxNotify(message, title) {
    isNotified = true;
    tit.innerHTML = title;
    mes.innerHTML = message;
    box.style.right = "75px";
    
    new Audio("../src/assets/notification.mp3").play();
    box.style.animation = "flyFromLeftBox 0.5s ease-in-out";

    setTimeout(() => {
        box.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        box.style.animation = "flyAwayToLeftBox 0.5s ease-in-out";
        setTimeout(() => {
            box.style.opacity = "0";
        }, 350);
        isNotified = false;
    }, 4500);
}

function mapNotify(message, title, la, lo) {
    isNotified = true
    if (typeof la != "number" && typeof lo != "number") {
        la, lo = 0.00;
    }
    
    
}



    