import { Header } from 'stories/header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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
describe('header', () => {
  it('title is always exist', () => {
    const { getByText } = render(<Header links={sampleData} />);
    expect(getByText('Knit K street')).toBeTruthy();
  });

  it('has link list', () => {
    const { getByRole } = render(<Header links={sampleData} />);
    expect(getByRole('links', { description: '商品一覧へ' })).toBeTruthy();
  });

  it('has link to login page', () => {
    const { getByTitle } = render(<Header links={sampleData} />);
    expect(getByTitle('login')).toBeTruthy();
  });
});

describe('responsible', () => {
  it('User can open side nav when innerWidth is less than 768', async () => {
    const user = userEvent.setup();
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 760,
    });

    const { getByTestId } = render(<Header links={sampleData} />);
    await user.click(getByTestId('nav-trigger'));
    expect(getByTestId('navigation-active')).toBeTruthy();
  });
});
