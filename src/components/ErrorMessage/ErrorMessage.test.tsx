import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders error message', () => {
    render(<ErrorMessage />);
    expect(screen.getByText('Error loading data.')).toBeInTheDocument();
  });
});
