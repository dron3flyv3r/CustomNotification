# CustomNotification

## Description

This is a simple plugin that allows you to send custom notifications to your computer instead of the default ugly ones that you are used to. From Windows, Mac and Linux. 

I made this so I could get notifications from small scripts or automations I made, and I thought it would be nice to share it with you guys. I hope you enjoy it. If you have any questions, feel free to ask me. I will try to answer as soon as possible. If you have any suggestions, feel free to make a pull request. I will try to review it as soon as possible. 


## Setup

1. Get api key from [geoapify](geoapify.com) and add it to `config.json` in the static folder
2. download the [latest release](https://github.com/dron3flyv3r/CustomNotification/releases/tag/v1.0.0-beta.1)
2. Run `npm install` to install dependencies
3. Start the server with `npm start`

## Basic use
### For Python (pip install coming soon)
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE

Here is an example of how to do this in python:
```
import requests
requests.get("http://localhost:3000/m=Hallo%20this%20is%20a%20test&h=Test&t=box")
```

### For Javascript
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE

Here is an example of how to do this in javascript:
```
fetch("http://localhost:3000/m=Hallo%20this%20is%20a%20test&h=Test&t=box")
```

### For Java
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
URL url = new URL("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box");
HttpURLConnection con = (HttpURLConnection) url.openConnection();
con.setRequestMethod("GET");
```

### For C#
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box");
request.Method = "GET";
```

### For C++
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
#include <iostream>
#include <string>
#include <curl/curl.h>

int main() {
    CURL *curl;
    CURLcode res;
    curl = curl_easy_init();
    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box");
        res = curl_easy_perform(curl);
        curl_easy_cleanup(curl);
    }
    return 0;
}
```

### For PHP
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
<?php
    $url = "http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    echo $output;
?>
```

### For Rust
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
use reqwest::blocking::Client;

fn main() {
    let client = Client::new();
    let res = client.get("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box").send().unwrap();
    println!("{:?}", res);
}
```

### For Go
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
package main

import (
    "fmt"
    "net/http"
)

func main() {
    resp, err := http.Get("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
    fmt.Println(resp)
}
```

### For Ruby
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
require 'net/http'

url = URI.parse("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box")
req = Net::HTTP::Get.new(url.to_s)
res = Net::HTTP.start(url.host, url.port) {|http|
  http.request(req)
}
puts res.body
```

### For Swift
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
import Foundation

let url = URL(string: "http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box")!
let task = URLSession.shared.dataTask(with: url) { data, response, error in
    guard let data = data, error == nil else {
        print(error?.localizedDescription ?? "No data")
        return
    }
    let responseJSON = try? JSONSerialization.jsonObject(with: data, options: [])
    if let responseJSON = responseJSON as? [String: Any] {
        print(responseJSON)
    }
}
task.resume()
```

### For Kotlin
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

fun main(args: Array<String>) {
    val url = URL("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box")
    val con = url.openConnection() as HttpURLConnection
    con.requestMethod = "GET"
    val responseCode = con.responseCode
    println("GET Response Code :: $responseCode")
    if (responseCode == HttpURLConnection.HTTP_OK) { // success
        val `in` = BufferedReader(InputStreamReader(con.inputStream))
        var inputLine: String?
        val response = StringBuffer()
        while (`in`.readLine().also { inputLine = it } != null) {
            response.append(inputLine)
        }
        `in`.close()
        // print result
        println(response.toString())
    } else {
        println("GET request not worked")
    }
}
```

### For Dart
To call the api, you need to send a post request to the server with the following parameters:
- &m=MESSAGE
- &h=TITLE (optional)
- &t=TYPE
```
import 'dart:io';

void main() async {
  var httpClient = new HttpClient();
  var request = await httpClient.getUrl(Uri.parse("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box"));
  var response = await request.close();
  if (response.statusCode == HttpStatus.OK) {
    var json = await response.transform(UTF8.decoder).join();
    print(json);
  } else {
    print("Error getting IP address:\nHttp status ${response.statusCode}");
  }
  httpClient.close();
}
```

# Some advanced stuff
## Customization
There are a few other types of notifications you can send: (default is box)
- &t=box
- &t=img
- &t=map

### Box
This is the default notification type. It is a simple box with a title and a message.

### Img
This notification type is a box with a title and a message, but it also has an image. To use this type, you need to add the following parameter: You can also use a gif as an image.
- &i=IMAGE_URL

### Map
This notification type is a box with a title and a message, but it also has a map. To use this type, you need to add the following parameter:
- &la=LATITUDE (Use a dot for decimals)
- &lo=LONGITUDE (Use a dot for decimals)

## Some examples in Javascript (Node.js)
### Box
```
fetch("http://localhost:3000/m=Hallo%20this%20is%20a%20test&h=Test&t=box")
```

### Img
```
fetch("http://localhost:3000/m=Hallo%20this%20is%20a%20test&h=Test&t=img&i=https://media.tenor.com/VFFJ8Ei3C2IAAAAd/rickroll-rick.gif")
```

### Map
```
fetch("http://localhost:3000/m=Hallo%20this%20is%20a%20test&h=Test&t=map&la=52.370216&lo=4.895168")
```

# For the future
- [ ] Add more notification types
- [ ] Add a customization options
- [ ] Add more languages
- [ ] Add more examples
- [ ] Add more documentation
- [ ] Add a web interface to send notifications from a browser (maybe)
- [ ] Add a web interface to customize the notifications (maybe)

# Credits
- [Dron3flyv3r](https://github.com/dron3flyv3r)
- And you, for using this project! :)

# Donate
If you like this project, you can donate to me via [PayPal](https://paypal.me/Droneflyver) or [Ko-Fi](https://ko-fi.com/dron3flyv3r).
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/dron3flyv3r)




