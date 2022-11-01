import { Input } from 'stories/form/input';
import { render } from '@testing-library/react';

describe('form > input', () => {
  it('get by label text', () => {
    const { getByLabelText } = render(
      <Input value="Default" labelText={'User'} id="user" />
    );
    expect(getByLabelText('User')).toBeTruthy();
  });

  it('get by placeholder text', () => {
    const { getByPlaceholderText } = render(
      <Input
        value="Default"
        labelText={'User'}
        id="user"
        placeholder="userを入力してください"
      />
    );
    expect(getByPlaceholderText('userを入力してください')).toBeTruthy();
  });

  it('get by role', () => {
    const { getByRole } = render(
      <Input
        value="Default"
        labelText={'User'}
        id="user"
        placeholder="userを入力してください"
        alert={['入力内容を確認してください', '数字で入力してください']}
      />
    );
    expect(
      getByRole('alertdialog', { description: /入力内容を確認してください/ })
    ).toBeTruthy();
  });

  it('get by display value', () => {
    const { getByDisplayValue } = render(
      <Input
        value="Default"
        labelText={'User'}
        id="user"
        placeholder="userを入力してください"
        alert={['入力内容を確認してください', '数字で入力してください']}
      />
    );
    expect(getByDisplayValue('Default')).toBeTruthy();
  });
});
