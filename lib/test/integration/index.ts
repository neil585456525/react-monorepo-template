import { test as base, expect } from '@playwright/test';
import { createWorkerFixture, type MockServiceWorker } from 'playwright-msw';
import { rest } from 'msw';

const test = base.extend<{
  worker: MockServiceWorker;
}>({
  worker: createWorkerFixture([
    rest.post('/', (req, res, ctx) => {
      console.log(666);
      res(ctx.status(200));
    }),
  ]),
});

export { expect, test };
