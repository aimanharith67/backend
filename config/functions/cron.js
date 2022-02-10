'use strict';
var moment = require('moment');
const { default: createStrapi } = require('strapi');
var fs = require('fs');
var path = require('path');
const crypto = require('crypto');


// No Template
async function sendToYou(){
  await strapi.plugins['email'].services.email.send({
    to: 'aimanharith67@gmail.com',
    from: 'aimanharith67@gmail.com',
    replyTo: 'aimanharith67@gmail.com',
    subject: 'Testing Email Je',
    html:'test',
  });console.log('sended')
}

// Using Template in Strapi


async function sendToMe(){

  const pluginStore = await strapi.store({
    environment: '',
    type: 'plugin',
    name: 'users-permissions',
  });

  
  const settings = await pluginStore.get({ key: 'email' })
  .then((storeEmail) => storeEmail['email_confirmation'].options);
  console.log('masuk');


  await strapi.plugins['email'].services.email.send({
    to: 'aimanharith67@gmail.com',
    from: 'aimanharith67@gmail.com',
    replyTo: 'aimanharith67@gmail.com',
    subject: 'Testing Email Je',
    html:settings.message,
  });console.log('sended')
}


module.exports = {
  '* * * * *': async () =>{
    // Uncomment this to get email
// sendToMe()
// sendToYou()


//     // Hantar email dr exp.html
//     // const html = path.join(__dirname + '/../exp.html');

//     // fs.readFile(html, { encoding: 'utf-8' }, function (
//     //   err,
//     //   html,
//     // ) {
//     //   if (err) throw(err);
//     //   const newhtml = html;
//     //   console.log(newhtml)
//     //   sendToMe(newhtml)
//     // });

    // Hantar email dr sini
    // await strapi.plugins['email'].services.email.send({
      
    //   to: 'harith.aiman@celcom.com.my',
    //   from: 'aimanharith67@celcom.com.my',
    //   replyTo: 'aimanharith67@gmail.com',
    //   subject: 'Testing',
    //   html:'testing 123',
    // });  
    // console.log('send')

  } 
  
}

