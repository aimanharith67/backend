module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron :{
    enabled: true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'af521ebcfc491fc726f5cd429794026c'),
    },
  },
});
