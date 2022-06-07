import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';

test('renders tabs div', () => {
  render(<Tabs />);
  const textElement = screen.getByText(/Tabs/i);
  expect(textElement).toBeInTheDocument();
});