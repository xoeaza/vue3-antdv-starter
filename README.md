# gwms_customer

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Local Environment Variables

Create file `.env.local` at root:

```
API_SERVER_URL="http://127.0.0.1"
```

used as:

```
process.env.API_SERVER_URL
```

after `require("dotenv").config();`. For details, see: https://www.npmjs.com/package/dotenv
