

//     async function sendToMe(){
//         const settings = await pluginStore
//         .get({ key: 'email' })
//         .then((storeEmail) => storeEmail['email_confirmation']);

//         await strapi.plugins['email'].services.email.send({
//             to: 'aimanharith67@gmail.com',
//             from:settings.name,
//             replyTo: settings.response_email,
//             subject: settings.object,
//             text: settings.message,
//             html: settings.message,
//         });console.log('email send')
// }

async function sendToMe(){
    const emailTemplate = {
        subject: 'Welcome <%= user.firstname %>',
        text: `Welcome on mywebsite.fr!
            Your account is now linked with: <%= user.email %>.`,
            html: `<h1>Welcome on mywebsite.fr!</h1>
            <p>Your account is now linked with: <%= user.email %>.<p>`,
        };
        
        await strapi.plugins.email.services.email.sendTemplatedEmail(
            {
            to: user.email,
            // from: is not specified, so it's the defaultFrom that will be used instead
            },
            emailTemplate,
            {
            user: _.pick(user, ['username', 'email', 'firstname', 'lastname']),
            }
        );
        console.log('dah send')
}

    

module.exports = {
    '* * * * *': async () =>{
    sendToMe()
    }

    
}
