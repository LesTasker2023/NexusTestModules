import type { Meta, StoryObj } from '@storybook/vue3';
import <FTName> from './<FTName>.vue';
import { defaultData, alternateData } from "./<FTName>Data";

const meta: Meta<typeof <FTName>> = {
  title: 'Components/<FTName>',
  component: <FTName>,
  args: defaultData,
};

export default meta;

export const Default: StoryObj<typeof <FTName>> = {
  render: (args) => ({
    components: { <FTName> },
    setup() {
      return { args };
    },
    template: '<<FTName> v-bind="args">Click Me</<FTName>>',
  }),
};

export const AlternateStory: StoryObj<typeof <FTName>> = {
  ...Default,
  args: alternateData,
};
