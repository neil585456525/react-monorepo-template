// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { MyButton } from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof MyButton> = {
  component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const DefaultStory: Story = {
  args: {
    children: 'Submit',
  },
};

export const LoadingStory: Story = {
  args: {
    children: 'Submit',
    isLoading: true,
  },
};
