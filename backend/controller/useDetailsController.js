const { sequelize } = require('./db')
var user_details = sequelize.import('../models/user_details')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var userdeptrel=sequelize.import('../models/user_dept_relation');
var dept=sequelize.import('../models/department')
var role=sequelize.import('../models/role')
var userolerel=sequelize.import('../models/user_role_relation');

getUserDetails = {
    handler: async () => {
        var result = [];
        console.log('calling')
      //  if(request.pre.tokenresult.auth){s
            await user_details.sequelize.sync().then(async function () {
                            await user_details.findAll({}).then((res) => {
                                //console.log(res);
                                res.map((a) => {
                                    result.push(a.dataValues)
                                })
                
                            })
                        })
     

return result;
}
}



getWholeDetails = {
    handler:async  (request, reply) => {
        var result = [];
        const [results] = await sequelize.query("select user_details.id, user_details.name,user_details.salary, user_details.password,department.dname,role.rname from user_details inner join user_role_relation on user_details.id=user_role_relation.user_id inner join role on user_role_relation.role_id=role.id inner join user_dept_relation on user_details.id=user_dept_relation.user_id inner join department on user_dept_relation.dept_id=department.id;")
       console.log(results);
        return results
    }
}


// "select user_details.name,user_details.salary, user_details.password,department.dname,role.rname from user_details inner join user_role_relation on user_details.id=user_role_relation.user_id inner join role on user_role_relation.role_id=role.id inner join user_dept_relation on user_details.id=user_dept_relation.user_id inner join department on user_dept_relation.dept_id=department.id;"





getUserDetailsById = {
    handler: async (request, reply) => {
        var result = [];
       // if(request.pre.tokenresult.auth){
        await user_details.sequelize.sync().then(async function () {
            await user_details.findAll({ where: { id: request.params.id } }).then((res) => {
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })
       // else{
       //     result.push({statusCode:404,msg:'cannot access user details'})
       // }
        return result;
    }
}


createUser = {
    handler: async (request, reply) => {
       console.log(request.payload.user)
       
        var result=null;
     
     await user_details.sequelize.sync().then( async function () {

            // await bcrypt.genSalt(saltRounds, async function(err, salt) {
            // await bcrypt.hash(request.payload.password, salt, async function(err, hash) {
            //       console.log(hash)
                   
                 await  user_details.create({ name: request.payload.user.name, password: request.payload.user.password ,role:request.payload.user.role,salary:request.payload.user.salary
        }).then(async (res) => {
              console.log('queried value')
await user_details.findOne({where:{name:request.payload.user.name}}).then(async res=>{
    console.log(res.dataValues.id)
    var id=res.dataValues.id

  await dept.findOne({where:{dname:request.payload.user.department}}).then(async res=>{
      var depart=res.dataValues.id
      
    await  role.findOne({where:{rname:request.payload.user.role}}).then(async res=>{
          console.log(res.dataValues);
        //   console.log('here')
     var userole=res.dataValues.id;
        //  console.log(id, depart,userole)
         await userdeptrel.create({user_id:id,dept_id:depart}).then(async res=>{
        console.log(res.dataValues)
await userolerel.create({user_id:id,role_id:userole}).then(res=>{
    console.log('successfully inserted into relation tables')
})
         })
      })
    
  })

})

                      result = {res}
        
                    }).catch(err => {
    // console.log(err)                
                        result={err}
                    })
                
                
                
                
                
                });
          //  });
             
             
      //  })
     
         result={statusCode:200}
        return result;
      

 
    }
}

deleteUser = {
    handler: async (request, reply) => {
        var result;
        console.log(request.params.id)
        await user_details.sequelize.sync().then(async function () {
            await user_details.destroy({ where: { id: request.params.id } }).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })

        return result;
    }
}


// loginUser = {
//     handler: async (request, reply) => {
//         var result = {tokenId:''};
//         var user={
//             name:'',
//             password:'',
//             email:''
//         }
//         await user_details.sequelize.sync().then(async function () {
     
           
//                  await user_details.findOne({ where: { name: request.payload.name, password:request.payload.password } }).then((res) => {
         
//                     user.name=res.dataValues.name;
//                     user.password=res.dataValues.password;
//                     user.email=res.dataValues.email;
//       console.log(user)
  
//                 //     bcrypt.compare(request.payload.password, hash=user.password, function(err, result) {
//                 //         // result == true
//                 //   //  });
//                 //    console.log('happening')
//                 //    console.log(result);
//                   //  })

//                   result.tokenId=createToken(user);
                  
//                   })
         
           
//         })
       
       
//       return result
//     }
// }


module.exports = {
    getUserDetails,
    getUserDetailsById,
    createUser,
    deleteUser,
    getWholeDetails
   //loginUser

}


