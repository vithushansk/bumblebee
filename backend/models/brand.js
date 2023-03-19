module.exports = (sequelize,Sequelize) => {
    const Brand = sequelize.define('brand',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });
    return Brand;
}
