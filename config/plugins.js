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
    upload: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
            upload: {},
            delete: {},
          },
    }
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
