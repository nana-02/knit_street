import { Button } from 'stories/button';
import { render } from '@testing-library/react';

test('return Default if children is Default', () => {
  const { getByTestId } = render(<Button>Default</Button>);
  expect(getByTestId('button')).toBeTruthy();
});

test('return null if children is empty', () => {
  const { container } = render(<Button></Button>);
  expect(container.firstChild).toBeNull();
});