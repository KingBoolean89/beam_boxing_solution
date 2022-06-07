import { render, screen } from '@testing-library/react';
import Box from './Box';

test('renders box div', () => {
  render(<Box />);
  const textElement = screen.getByText(/Box/i);
  expect(textElement).toBeInTheDocument();
});