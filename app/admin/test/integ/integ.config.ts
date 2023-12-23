import { PlaywrightTestConfig } from '@playwright/test';

export const baseUrl = 'http://localhost:3000';

const config: PlaywrightTestConfig = {
  testMatch: /(integ).*\.test\.(js|ts)/,
  retries: 2,
  use: {
    actionTimeout: 6000,
    baseURL: baseUrl,
  },
};

export default config;
