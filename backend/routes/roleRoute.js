
var roleController = require('../controller/roleController')
module.exports = [

    {
        method: 'GET',
        path: '/role',
        config: roleController.getRoleDetails
    },
    // {
    //     method: 'POST',
    //     path: '/role/create',
    //     config: catgController.createRole
    // },
    // {
    //     method: 'DELETE',
    //     path: '/role/delete',
    //     config: catgController.deleteRole
    // }
]







