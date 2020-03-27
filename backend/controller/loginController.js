const { sequelize } = require('./db')
var user_details=sequelize.import('../models/user_details');
var verifyToken = require('../schemas/verifyToken');
var createToken = require('../utils/token')
var role=require('../models/role');
var user_role_relation=require('../models/user_role_relation')

loginUser={
handler: async (request, reply) => {
    var result = { tokenId: '',statusCode:200,userId:'' };
    console.log(request.payload)
    var user = {
        name: '',
        password: '',
     

    }
   
    await user_details.sequelize.sync().then(async function () {


        await user_details.findOne({ where: { name: request.payload.user.name, password: request.payload.user.password } }).then(async res => {

            user.name = res.dataValues.name;
            user.password = res.dataValues.password;
        //     // user.email = res.dataValues.email;
        //  await user_role_relation.findOne({where:{user_id:res.dataValues.id}}).then((res)=>{
        //      console.log(res);
        //  })

           console.log(res.dataValues.id)
            result.tokenId = createToken(user);
result.userId=res.dataValues.id
           

        }).catch(err=>{
            result={statusCode:404,msg:'No such user'}
        })

    })

    console.log(result)
    return result
}
}


module.exports = {
  loginUser
  
}


