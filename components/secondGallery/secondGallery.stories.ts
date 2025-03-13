import type { Meta, StoryObj } from '@storybook/vue3';
import secondGallery from './secondGallery.vue';
import { defaultData, alternateData } from "./secondGalleryData";

const meta: Meta<typeof secondGallery> = {
  title: 'Components/secondGallery',
  component: secondGallery,
  args: defaultData,
};

export default meta;

export const Default: StoryObj<typeof secondGallery> = {
  render: (args) => ({
    components: { secondGallery },
    setup() {
      return { args };
    },
    template: '<secondGallery v-bind="args">Click Me</secondGallery>',
  }),
};

export const AlternateStory: StoryObj<typeof secondGallery> = {
  ...Default,
  args: alternateData,
};
