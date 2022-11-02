// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Checkbox } from 'stories/form/checkbox';

export default {
  title: 'stories/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = function (args) {
  return <Checkbox {...args} />;
};
const sampleData = {
  name: 'アンケート',
  selected: ['1'],
  data: [
    { id: '1', value: 'web' },
    { id: '2', value: '口コミ' },
    { id: '3', value: 'その他' },
  ],
};
export const Default = Template.bind({});
Default.args = {
  ...sampleData,
};
