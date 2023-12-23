import { test as base, expect } from '@playwright/test';
import { http } from 'msw';
import { createWorkerFixture, type MockServiceWorker } from 'playwright-msw';

import handlers from './handlers';

const test = base.extend<{
  worker: MockServiceWorker;
  http: typeof http;
}>({
  worker: createWorkerFixture(handlers),
  http,
});

export { expect, test };
