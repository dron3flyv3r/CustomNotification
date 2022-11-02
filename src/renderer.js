const mes = document.getElementById("message");
const tit = document.getElementById("title");
const box = document.getElementById("box");


window.electron.handelUrl((_event, url) => {
    let message = "Null";
    let title = "Null";
    let type = "Null";
    let urls;

    url = url.slice(1);

    urls = url.split("&");

    urls.forEach(url => {
        if (url.slice(0, 2) == "m=") {
            message = url.slice(2);
        }
        if (url.slice(0, 2) == "h=") {
            title = url.slice(2);
        } 
        if (url.slice(0, 2) == "t=") {
            type = url.slice(2);
        }
    });

        boxNotify(message, title);
});

function boxNotify(message, title) {
    tit.innerHTML = title;
    mes.innerHTML = message;
}



    