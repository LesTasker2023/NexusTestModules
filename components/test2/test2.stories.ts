import type { Meta, StoryObj } from '@storybook/vue3';
import test2 from './test2.vue';
import { defaultData, alternateData } from "./test2Data";

const meta: Meta<typeof test2> = {
  title: 'Components/test2',
  component: test2,
  args: defaultData,
};

export default meta;

export const Default: StoryObj<typeof test2> = {
  render: (args) => ({
    components: { test2 },
    setup() {
      return { args };
    },
    template: '<test2 v-bind="args">Click Me</test2>',
  }),
};

export const AlternateStory: StoryObj<typeof test2> = {
  ...Default,
  args: alternateData,
};
