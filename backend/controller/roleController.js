
const { sequelize } = require('./db')
var role=sequelize.import('../models/role')


getRoleDetails = {
    handler: async () => {
        var result = [];
        await role.sequelize.sync().then(async function () {

            await role.findAll({}).then((res) => {
              //  console.log(res);
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })
        return result;
    }
}


// createRole = {
//     handler: async (request, reply) => {
//         var result;
//         await role.sequelize.sync().then(async function () {
//             await role.create({ name: request.payload.name}).then((res) => {
//                 console.log(res)
//                 result = { statusCode: 200 }

//             }).catch(err => {
//                 result = { statusCode: 400 }
//             })
//         })

//         return result;
//     }
// }

// deleteRole = {
//     handler: async (request, reply) => {
//         var result;
//         console.log(request.payload.name)
//         await role.sequelize.sync().then(async function () {
//             await role.destroy({ where: { name: request.payload.name } }).then((res) => {
//                 console.log(res)
//                 result = { statusCode: 200 }

//             }).catch(err => {
//                 result = { statusCode: 400 }
//             })
//         })
//         return result;
//     }
// }




module.exports = {
    getRoleDetails,
    // createRole,
    // deleteRole
}