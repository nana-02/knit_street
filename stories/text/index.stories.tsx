// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Text } from 'stories/text';

export default {
  title: 'stories/text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = function (args) {
  return <Text {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    children: 'default text'
};
