export const apiConfig = {
  api1: {
    development: 'https://dev-api1.com',
    production: 'https://prod-api1.com',
  },
  api2: {
    development: 'https://dev-api2.com',
    production: 'https://prod-api2.com',
  },
};

const env = process.env.NODE_ENV || 'development';

export const apiEndpoint = {
  api1: apiConfig.api1[env],
  api2: apiConfig.api2[env],
};
