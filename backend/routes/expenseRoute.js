
var expenseController = require('../controller/expenseController')
module.exports = [

    {
        method: 'GET',
        path: '/expensedetails',
        config: expenseController.getexpenseDetails
    },
    {
        method: 'POST',
        path: '/addexpense',
        config: expenseController.addExpense
    },
    {
        method: 'GET',
        path: '/expensedetails/all',
        config: expenseController.getWholeExpDetails
    },
    // {
    //     method: 'DELETE',
    //     path: '/department/delete',
    //     config: deptController.deleteDept
    // }
]







