

var loginController=require('../controller/loginController');
module.exports = [

   
    {
        method: 'POST',
        path: '/login',


        config: loginController.loginUser
          
           
    }



]










