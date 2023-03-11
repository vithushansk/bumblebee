module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        dateOfBirth:{
            type:Sequelize.DATEONLY,
            allowNull:false
        },
        active:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:true
        }
    });
    return User;
}