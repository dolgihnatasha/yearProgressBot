export default {
  telegram: {
    token: process.env.TELEGRAM_TOKEN || '238471408:AAG55S_j7XegBq1GmEJVJI1BN-sbJpEpzSQ',
    externalUrl: process.env.CUSTOM_ENV_VARIABLE || 'https://warm-headland-52199.herokuapp.com/',
    port: process.env.PORT || 443,
    host: '0.0.0.0'
  }
};
