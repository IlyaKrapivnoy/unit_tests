import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
    it('App renders', () => {
        render(<App />);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('Find course:')).toBeInTheDocument();
    });

    it('typing in Searchbox works', () => {
        render(<App />);

        expect(screen.queryByDisplayValue(/React/)).toBeNull();

        userEvent.type(screen.getByRole('textbox'), 'React');
        expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
    });
});
