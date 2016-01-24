## Cumberbatch'ed Names

A tiny silly node.js app that generates and serves "Cumberbatch'ed Names" (parody names of Benedict Cumberbatch) via `GET`. 

#### Install
```sh
node server.js
```

Access `GET` http://localhost:3000/ with the response:
```json
{
 "text":"Burberry Snugglesnatch"
}
```
Optionally: Add `response_type=in_channel` to the query parameters


Example here: https://cumberbatched-names.herokuapp.com/?response_type=in_channel
