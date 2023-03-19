module.exports = (sequelize,Sequelize) => {
    const Product = sequelize.define('product',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        category:{
            type:Sequelize.STRING,
            allowNull:false
        },
        brand:{
            type:Sequelize.STRING,
            allowNull:false
        },
        price:{
            type:Sequelize.DOUBLE,
            allowNull:false
        },
        qty:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
    });
    return Product;
}
