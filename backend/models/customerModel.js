module.exports = (sequelize,Sequelize) => {
    const Customer = sequelize.define('customer',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        lastname:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        address:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        mobile:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        avatar:{
            type:Sequelize.STRING,
            allowNull:true,
        },
        userId:{
            type:Sequelize.INTEGER,
            allowNull:false,
            reference:{
                model:'users',
                key:'id',
            }
        }
    });
    return Customer;
}