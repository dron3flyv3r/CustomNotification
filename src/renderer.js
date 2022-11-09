const box = document.getElementById("box");
const box_tit = document.getElementById("box_title");
const box_mes = document.getElementById("box_message");

const map = document.getElementById("map");
const map_tit = document.getElementById("map_title");
const map_mes = document.getElementById("map_message");
const map_map = document.getElementById("map_map");

const img = document.getElementById("img");
const img_tit = document.getElementById("img_title");
const img_mes = document.getElementById("img_message");
const img_url = document.getElementById("img_url");

const API_KEY = "API_KEY";

let isNotified = false;

let missingNotification = []; 

window.electron.handelUrl((_event, url) => {

    let message = "Null";
    let title = "Notification";
    let type = "Null";
    let imgUrl = "Null";
    let lat = 0.00;
    let lot = 0.00;
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
            lat = Number(decodeURIComponent(url.slice(3)));
        }
        if (url.slice(0, 3) == "lo=") {
            lot = Number(decodeURIComponent(url.slice(3)));
        }
        if (url.slice(0, 2) == "i=") {
            imgUrl = url.slice(2);
        }
    });

    if (message != "Null") {
        switch (type.toLocaleLowerCase()) {
            case "box":
                boxNotify(message, title);
                break;
        
            case "map":
                mapNotify(message, title, lat, lot);
                break;
            
            case "img":
                imageNotify(message, title, imgUrl);
                break;
    
            default:
                boxNotify(message, title);
                break;
        }
    }
});

function imageNotify(message, title, imgUrl) {
    isNotified = true
    isNotified = true;
    img_tit.innerHTML = title;
    img_mes.innerHTML = message;
    img_url.src = imgUrl;
    img.style.right = "75px";
    
    new Audio("../src/assets/notification.mp3").play();
    img.style.animation = "flyFromLeftBox 0.5s ease-in-out";

    setTimeout(() => {
        img.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        img.style.animation = "flyAwayToLeftBox 0.5s ease-in-out";
        setTimeout(() => {
            img.style.opacity = "0";
        }, 350);
        isNotified = false;
    }, 4500);    
}

function boxNotify(message, title) {
    isNotified = true;
    box_tit.innerHTML = title;
    box_mes.innerHTML = message;
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

function mapNotify(message, title, lat, lot) {
    isNotified = true
    map_tit.innerHTML = title;
    map_mes.innerHTML = message;
    map_map.src = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&marker=lonlat:${lot},${lat};size:xx-large&zoom=16&apiKey=${API_KEY}`
    map.style.right = "75px";
    
    new Audio("../src/assets/notification.mp3").play();
    map.style.animation = "flyFromLeftBox 0.5s ease-in-out";

    setTimeout(() => {
        map.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        map.style.animation = "flyAwayToLeftBox 0.5s ease-in-out";
        setTimeout(() => {
            map.style.opacity = "0";
        }, 350);
        isNotified = false;
    }, 4500);
    
    
}



    