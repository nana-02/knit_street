// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Card } from 'stories/card';

export default {
  title: 'stories/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = function (args) {
  return <Card {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: 'index',
};
