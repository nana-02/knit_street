/**
 * [] 選択されているかどうかのテスト
 * [] 表示テスト
 */

import { Radio } from 'stories/form/radio';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const sampleData = {
  name: 'size',
  selected: 's',
  data: [
    { id: 's', value: 'Sサイズ' },
    { id: 'm', value: 'Mサイズ' },
    { id: 'l', value: 'Lサイズ' },
  ],
};
describe('radio', () => {
  it('return null when input no data', () => {
    const { container } = render(<Radio></Radio>);
    expect(container.firstChild).toBeNull();
  });
  it('get by text', () => {
    const { getByText } = render(<Radio {...sampleData}></Radio>);
    expect(getByText('Sサイズ')).toBeTruthy();
  });

  it('get by role', () => {
    const { getByLabelText } = render(<Radio {...sampleData}></Radio>);
    expect(getByLabelText('Sサイズ')).toBeChecked();
  });

  it('get by role when checking other radio', async () => {
    const user = userEvent.setup();
    const { getByLabelText, getByText } = render(
      <Radio {...sampleData}></Radio>
    );
    await user.click(getByText('Mサイズ'));
    expect(getByLabelText('Mサイズ')).toBeChecked();
  });
});
