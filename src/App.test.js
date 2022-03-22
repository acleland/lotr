import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main component', () => {
  render(<App />);
  const title = screen.getByText('Lord of the React');
  expect(title).toBeInTheDocument();
});
