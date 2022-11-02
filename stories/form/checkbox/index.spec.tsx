import { Checkbox } from 'stories/form/checkbox';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const sampleData = {
  name: 'アンケート',
  selected: ['1'],
  data: [
    { id: '1', value: 'web' },
    { id: '2', value: '口コミ' },
    { id: '3', value: 'その他' },
  ],
};
describe('checkbox', () => {
  it('return null when input no data', () => {
    const { container } = render(<Checkbox data={undefined}></Checkbox>);
    expect(container.firstChild).toBeNull();
  });
  it('get by text', () => {
    const { getByText } = render(<Checkbox {...sampleData}></Checkbox>);
    expect(getByText('web')).toBeTruthy();
  });

  it('get by role', () => {
    const { getByText } = render(<Checkbox {...sampleData}></Checkbox>);
    expect(getByText('web')).toBeChecked();
  });

  it('get by role when checking other checkbox', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Checkbox {...sampleData}></Checkbox>);
    await user.click(getByText('口コミ'));
    expect(getByText('口コミ')).toBeChecked();
  });
});
