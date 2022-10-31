import { Text } from 'stories/text';
import { render } from '@testing-library/react';

describe('check color', () => {
  it('show default designed text if input text without type', () => {
    const { getByText, getByTestId } = render(<Text>default text</Text>);
    expect(getByText('default text')).toBeTruthy();
    expect((getByTestId('text').style.color = 'rgb(26, 11, 8)'));
  });
  it('show alert designed text if input text with alrt type', () => {
    const { getByText, getByTestId } = render(<Text type={"alert"}>alert text</Text>);
    expect(getByText('alert text')).toBeTruthy();
    expect((getByTestId('text').style.color = 'rgb(26, 11, 8)'));
  });
  it('show safe designed text if input text with safe type', () => {
    const { getByText, getByTestId } = render(<Text type={"safe"}>safe text</Text>);
    expect(getByText('safe text')).toBeTruthy();
    expect((getByTestId('text').style.color = 'rgb(46, 182, 170)'));
  });
  it('show accent designed text if input text with accent type', () => {
    const { getByText, getByTestId } = render(<Text type={"accent"}>accent text</Text>);
    expect(getByText('accent text')).toBeTruthy();
    expect((getByTestId('text').style.color = 'rgb(221, 163, 0)'));
  });
  it('show bg designed text if input text with bg type', () => {
    const { getByText, getByTestId } = render(<Text type={"bg"}>bg text</Text>);
    expect(getByText('bg text')).toBeTruthy();
    expect((getByTestId('text').style.color = 'rgb(255, 255, 255)'));
  });
  
})

test('return null if children is empty', () => {
  const { container } = render(<Text></Text>);
  expect(container.firstChild).toBeNull();
});
