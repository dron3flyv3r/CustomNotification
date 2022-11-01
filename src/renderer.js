const apiText = document.getElementById("apiText");
let message = "Null";
let title = "Null";
let type = "Null";
let urls;

window.electron.handelUrl((_event, x) => {

    x = x.slice(1);

    urls = x.split("&");

    console.log(urls);

    urls.forEach(url => {
        url = url.replace(/%20/g, " ");
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

    apiText.innerHTML = "Message: " + message + " Title: " + title + " Type: " + type;	
});