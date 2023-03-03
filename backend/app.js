const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine','pug');

router.get('/', (req,res)=>{
    res.status(200).render('index');
});

app.use(router);
module.exports = app;