
const sendmail = require('sendmail')();
 

const sendWelcomeEmail=(email,name)=>
{
  
sendmail({
    from: 'tapendraxtra72@gmail.com',
    to: email,
    subject: 'Thanks for joining in!', 
    html: `Welcome to the app,${name}.let me lnow how you get along with app`,
     }, function(err, reply)
       {
       console.log(err && err.stack);
        console.dir(reply);
     }
     );  
 
}


const sendCancelationEmail=(email,name)=>{
    sendmail({
        from: 'tapendraxtra72@gmail.com',
        to: email,
        subject: 'Sorry to see you go!', 
        html: `Goodbye,${name}.I hope to see you back sometime soon`,
         }, function(err, reply)
           {
           console.log(err && err.stack);
            console.dir(reply);
         }
         );  
}


module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}

