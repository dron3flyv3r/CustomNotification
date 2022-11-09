# CustomNotification
## Basic use
Port use for the api is **3000**
### Python (pip install coming soon)
```
import requests
requests.get("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box")
```

### Java
```
URL url = new URL("http://localhost:3000/m=Yallo%20this%20is%20a%20test&h=Test&t=box");
HttpURLConnection con = (HttpURLConnection) url.openConnection();
con.setRequestMethod("GET");
```
### Basic Api Use
#### Title
Use ```&h=```
#### Message*
Use ```&m=```
#### Type
Use ```&t=```
- box
- map
- img
#### Map
use ``` %la= ``` and ``` %lo= ```
#### Img
use ``` &i= ```

### Advanse Api use
#### map
To use the map api you need to call  ```&la=52.5789``` the latitude (use . for more decimal) ```&lo=12.6845``` the longitude (use . for more decimal)

Example: ``` http://localhost:3000/m=hejsafra%20dette%20er%20en%20test&20map%20besked&h=test%20map&t=map&la=55.6412763&lo=12.0595312 ```

#### img
this can ONLY take a url NOT a file.
``` &i= ```

Example: ``` http://localhost:3000/m=hejsafra%20dette%20er%20en%20test%20fra%20image%20besked&h=test%20image&t=img&i=https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg  ```


