module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: "aimanharith67@gmail.com",
            from: "aimanharith67@gmail.com",
            replyTo: "aimanharith67@gmail.com",
            subject: "Testing Sendgrid and Strapi",
            text: "Alhamdulilah Berjaya!"
        });
        ctx.send("Email sent!");
    }
}