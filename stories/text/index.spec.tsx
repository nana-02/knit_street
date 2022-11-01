import { Text } from 'stories/text';
import { getByTestId, render } from '@testing-library/react';

test('return null if children is empty', () => {
  const { container } = render(<Text></Text>);
  expect(container.firstChild).toBeNull();
});

test('return Default if children is Default', () => {
  const { getByTestId } = render(<Text>Default</Text>);
  expect(getByTestId('text')).toBeTruthy();
});
