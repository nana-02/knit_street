// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Radio } from 'stories/form/radio';

export default {
  title: 'stories/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = function (args) {
  return <Radio {...args} />;
};
const sampleData = {
  name: 'size',
  selected: 's',
  data: [
    { id: 's', value: 'Sサイズ' },
    { id: 'm', value: 'Mサイズ' },
    { id: 'l', value: 'Lサイズ' },
  ],
};
export const Default = Template.bind({});
Default.args = {
  ...sampleData,
};
