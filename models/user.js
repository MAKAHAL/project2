
var bcrypt= require("bcrypt-nodejs")

module.exports = function(sequelize, DataTypes){
    var user= sequelize.define("user", {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail: true
            
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

user.prototype.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

user.beforeCreate(user => {
  user.password = bcrypt.hashSync(
     user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return user;
};






