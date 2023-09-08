import { test, expect } from '@playwright/experimental-ct-react';
import { MyButton } from '../index';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const testText = 'Hello World';
  const component = await mount(<MyButton>{testText}</MyButton>);
  await expect(component).toContainText(testText);
});
