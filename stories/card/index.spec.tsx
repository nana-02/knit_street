import { Card } from 'stories/card';
import { render } from '@testing-library/react';

const returnWidthMock = jest.fn();
returnWidthMock.mockReturnValueOnce(767).mockReturnValueOnce(768);
beforeEach(() => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: returnWidthMock(),
  });
});

describe('size', () => {
  it('return small card if width is less than 768px', () => {
    const { getByTestId } = render(<Card>small test</Card>);
    expect(getByTestId('small')).toBeTruthy();
  });

  it('return large card if width is more than 768px', () => {
    const { getByTestId } = render(<Card>large test</Card>);
    expect(getByTestId('large')).toBeTruthy();
  });
});

test('return null if children is empty', () => {
  const { container } = render(<Card></Card>);
  expect(container.firstChild).toBeNull();
});
