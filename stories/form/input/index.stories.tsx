// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Input } from 'stories/form/input';

export default {
  title: 'stories/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = function (args) {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'user',
  placeholder: 'ユーザ名を入力してください',
  labelText: 'ユーザ',
};

export const Alert = Template.bind({});
Alert.args = {
  id: 'user',
  placeholder: 'ユーザ名を入力してください',
  labelText: 'ユーザ',
  alert: ['入力内容を確認してください', '数字で入力してください'],
};
