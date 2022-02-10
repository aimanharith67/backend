module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_APIKEY'),
        },
        setting: {
            defaultFrom: "aimanharith67@gmail.com",
            defaultReplyTo: "aimanharith67@gmail.com"
        },
    },
});

// module.exports = ({ env }) => ({
//     email: {
//         provider: 'mailjet',
//         providerOptions: {
//             apiKey: env('MAILJET_SECRET_KEY'),
//         },
//         setting: {
//             defaultFrom: "aimanharith67@gmail.com",
//             defaultReplyTo: "aimanharith67@gmail.com"
//         },
//     },
// });
