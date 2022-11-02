const mes = document.getElementById("message");
const tit = document.getElementById("title");
const box = document.getElementById("box");

var isNotified = false;


window.electron.handelUrl((_event, url) => {

    let message = "Null";
    let title = "Notification";
    let type = "Null";
    let urls;

    url = url.slice(1);

    urls = url.split("&");

    urls.forEach(url => {
        if (url.slice(0, 2) == "m=") {
            message = url.slice(2);
            message = message.replace(/%20/g, " ");
        }
        if (url.slice(0, 2) == "h=") {
            title = url.slice(2);
        } 
        if (url.slice(0, 2) == "t=") {
            type = url.slice(2);
        }
    });
    

    switch (type) {
        case "box":
            boxNotify(message, title);
            break;
        
        case "map":
            
            break;
    
        default:
            boxNotify(message, title);
            break;
    }
});

function boxNotify(message, title) {
    isNotified = true;
    tit.innerHTML = title;
    mes.innerHTML = message;
    box.style.opacity = "1";
    box.style.right = "75px";

    box.style.animation = "flyFromLeft 0.5s ease-in-out";

    setTimeout(() => {
        box.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        box.style.animation = "flyAwayToLeft 0.5s ease-in-out";
        setTimeout(() => {
            box.style.opacity = "0";
            isNotified = false;
        }, 480);
    }, 4500);
}



    