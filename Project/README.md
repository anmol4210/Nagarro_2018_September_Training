

https://realworld.io


https://demo.productionready.io


API
https://conduit.productionready.io/api

https://conduit.productionready.io/api/articles


## API Documentation

https://github.com/gothinkster/realworld/blob/master/api




```js

let whitelist = ['google.com', 'google.co.in']

whitelist.forEach(site => {
  if (req.referrer.indexOf(site) !== -1) {
    res.header['Access-Control-Allow-Origin'] = req.referrer
  }
})

res.header['Access-Control-Allow-Origin'] = false

```
