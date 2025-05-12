import { render, screen } from '@testing-library/react';
import { SectionCard } from './Card';

describe('SectionCard', () => {
  const mockProps = {
    section: 'people',
    meta: {
      name: 'Characters',
      icon: <div>Icon</div>,
      route: '/people',
      description: 'Test description',
    },
    onClick: jest.fn(),
  };

  it('renders card with title and content', () => {
    render(<SectionCard {...mockProps} />);
    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('View All')).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    render(<SectionCard {...mockProps} />);
    screen.getByText('View All').click();
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
