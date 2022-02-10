module.exports = {
    index:async ctx =>{
        await strapi.plugins['email'].services.email.send({
        to: 'aimanharith67@gmail.com',
        from: 'aimanharith67@gmail.com',
        replyTo: 'aimanharith67@gmail.com',
        subject: 'Testing Email Je',
        text:'Sendgrid email'
        });
        ctx.send("Email Send!")
        console.log("Email Send")
        }
    }

    // Steps
    // 1. Letak ayat di atas,
    // 2. Kat config -> routes.json tambah route email,
    // 3. Paste url /email 