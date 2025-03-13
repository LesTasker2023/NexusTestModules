import type { Meta, StoryObj } from '@storybook/vue3';
import gallery from './gallery.vue';
import { defaultData, alternateData } from "./galleryData";

const meta: Meta<typeof gallery> = {
  title: 'Components/gallery',
  component: gallery,
  args: defaultData,
};

export default meta;

export const Default: StoryObj<typeof gallery> = {
  render: (args) => ({
    components: { gallery },
    setup() {
      return { args };
    },
    template: '<gallery v-bind="args">Click Me</gallery>',
  }),
};

export const AlternateStory: StoryObj<typeof gallery> = {
  ...Default,
  args: alternateData,
};
