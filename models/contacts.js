module.exports = function(sequelize, Sequelize){
    const Contact = sequelize.define('contact', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING, 
            notEmpty: true
        }, 
        contactName: {
            type: Sequelize.STRING, 
            notEmpty: true
        }, 
        phoneNumber: {
            type: Sequelize.STRING
        }, 
        email: {
            type: Sequelize.STRING, 
        validate: {
            isEmail: true
        }}


    });

    return Contact;

}
