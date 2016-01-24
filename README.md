## Cumberbatch'ed Names

A tiny silly node.js app that generates and serves "Cumberbatch'ed Names" (parody names of Benedict Cumberbatch) via `GET`. 

#### Install
```sh
node server.js // Now serving Cumberbatch`ed Names on port 3000
```

Access `GET` http://localhost:3000/ with the response:
```json
{
 "text":"Burberry Snugglesnatch"
}
```
Optionally: Add `response_type=in_channel` to the query parameters
