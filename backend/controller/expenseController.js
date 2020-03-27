const { sequelize } = require('./db')
var expense = sequelize.import('../models/expense')


var dept=sequelize.import('../models/department')
var category=sequelize.import('../models/category')


getexpenseDetails = {
    handler: async () => {
        var result = [];
        console.log('calling')
      //  if(request.pre.tokenresult.auth){s
            await expense.sequelize.sync().then(async function () {
                            await expense.findAll({}).then((res) => {
                                //console.log(res);
                                res.map((a) => {
                                    result.push(a.dataValuses)
                                })
                
                            })
                        })
     
return result;
}
}



addExpense = {
    handler: async (request, reply) => {
       console.log(request.payload.user)
       
        var result=null;
        await dept.sequelize.sync().then(async function () {

            await dept.findOne({where:{dname:request.payload.user.department}}).then(async res => {
                const deptid=res.dataValues.id
                console.log(res.dataValues);
               await category.findOne({where:{cname:request.payload.user.category}}).then(async res=>{
                   const catid=res.dataValues.id
                   await expense.create({user_id:request.payload.user.userid,amount:request.payload.user.amount,dept_id:deptid,cat_id:catid}).then(res=>{
                       console.log(res);
                    result={statusCode:200,msg:'sucessfull'}
                   })
            })
        })
        return result;
    })
      

 

    }
}

getWholeExpDetails = {
    handler:async  (request, reply) => {
        var result = [];
        const [results] = await sequelize.query("select user_details.name,expense.amount,department.dname,category.cname,expense.tstamp from user_details inner join expense on user_details.id=expense.user_id inner join department on department.id=expense.dept_id inner join category on category.id=expense.cat_id;")
       console.log(results);
        return results
    }
}





// 'select user_details.name,expense.amount,department.dname,category.name,expense.tstamp from user_details inner join expense on user_details.id=expense.user_id inner join department on department.id=expense.dept_id inner join category on category.id=expense.cat_id;'
// // deleteUser = {
//     handler: async (request, reply) => {
//         var result;
//         console.log(request.params.id)
//         await user_details.sequelize.sync().then(async function () {
//             await user_details.destroy({ where: { id: request.params.id } }).then((res) => {
//                 console.log(res)
//                 result = { statusCode: 200 }

//             }).catch(err => {
//                 result = { statusCode: 400 }
//             })
//         })

//         return result;
//     }
// }


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
   getexpenseDetails,
   addExpense,
   getWholeExpDetails
   //loginUser

}


