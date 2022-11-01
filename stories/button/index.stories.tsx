// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Button } from 'stories/button';

export default {
  title: 'stories/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function (args) {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    children: 'default button'
};

export const Alert = Template.bind({});
Alert.args = {
  type: 'alert',
  children: 'alert button',
  onClick: () => {alert('Alert')}
}