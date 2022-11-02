// storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';
// component
import { Header } from 'stories/header';

export default {
  title: 'stories/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = function (args) {
  return <Header {...args} />;
};
const sampleData = [
  {
    title: '商品一覧へ',
    url: '/products',
  },
  {
    title: 'ブログ',
    url: '/blogs',
  },
];
export const Default = Template.bind({});
Default.args = {
  links: sampleData,
};
