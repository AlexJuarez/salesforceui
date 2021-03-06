const compression = require('compression');
const express = require('express');

const app = express();

app.use(compression());
app.use('/', express.static(`${__dirname}/build`));

app.listen(process.env.PORT || 3000);

console.log(`Server started at localhost:${process.env.PORT || 3000}`);
