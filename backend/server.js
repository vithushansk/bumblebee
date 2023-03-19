const app = require('./app');

const db =  require('./models/index');
db.sequelize.sync();

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
    console.log("Application Running...!");
});