# http://ovre.tk api documentation

Hi! You are probably me, and forgot how to use your own api, but don't worry I wrote this documentation on how to use it.


# URL

Ovre requires a **application/json** post request to _http://ovre.tk/api/url/shorten_ with the json as 
{ "longUrl": "https://url.here" }

## Return

The api will return json looking like this:
```json
{
    "_id": "5fb6bafe7b957355b078c476",
    "longUrl": "https://example.com",
    "shortUrl": "https://ovre.tk/Eps83kwcw",
    "urlCode": "Eps83kwcw",
    "date": "Thu Nov 19 2020 18:35:42 GMT+0000 (Coordinated Universal Time)",
    "__v": 0
}
```
