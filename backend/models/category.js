module.exports = (sequelize,Sequelize) => {
    const Category = sequelize.define('category',{
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
    return Category;
}
