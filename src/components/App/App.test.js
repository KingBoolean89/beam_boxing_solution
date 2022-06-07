import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shipping title', () => {
  render(<App />);
  const textElement = screen.getByText(/Shipping/i);
  expect(textElement).toBeInTheDocument();
});
