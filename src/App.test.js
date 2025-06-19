import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Manager heading', () => {
  render(<App />);
  const heading = screen.getByText(/task manager/i);
  expect(heading).toBeInTheDocument();
});
