
const { sequelize } = require('./db')
var department=sequelize.import('../models/department')


getDeptDetails = {
    handler: async () => {
        var result = [];
        await department.sequelize.sync().then(async function () {

            await department.findAll({}).then((res) => {
                console.log(res);
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })
        return result;
    }
}


createDept = {
    handler: async (request, reply) => {
        var result;
        await department.sequelize.sync().then(async function () {
            await department.create({ name: request.payload.name}).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })

        return result;
    }
}

deleteDept = {
    handler: async (request, reply) => {
        var result;
        console.log(request.payload.name)
        await department.sequelize.sync().then(async function () {
            await department.destroy({ where: { name: request.payload.name } }).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })
        return result;
    }
}




module.exports = {
    getDeptDetails,
    createDept,
    deleteDept
}