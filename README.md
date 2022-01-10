Fork of the stencil tutorial: https://stenciljs.com/docs/react

Got an error when running `npm run build` in `./stencil`

```
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined at new
           NodeError (node:internal/errors:371:5) at validateString (node:internal/validators:119:11) at Object.dirname
           (node:path:654:5) at generateProxies
```

Using node 16.13.1 (error also happens with node 14.17.3)