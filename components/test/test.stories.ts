import type { Meta, StoryObj } from '@storybook/vue3';
import test from './test.vue';
import { defaultData, alternateData } from "./testData";

const meta: Meta<typeof test> = {
  title: 'Components/test',
  component: test,
  args: defaultData,
};

export default meta;

export const Default: StoryObj<typeof test> = {
  render: (args) => ({
    components: { test },
    setup() {
      return { args };
    },
    template: '<test v-bind="args">Click Me</test>',
  }),
};

export const AlternateStory: StoryObj<typeof test> = {
  ...Default,
  args: alternateData,
};
