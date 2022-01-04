import { render, screen } from '@testing-library/react';
import List from './List';

describe('List component', () => {
    const data = ['html', 'css', 'js'];
    test('List renders', () => {
        render(<List items={data} />);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/html/)).toBeInTheDocument();
    });

    test('List renders with no data', () => {
        render(<List />);

        expect(screen.queryByRole('list')).toBeNull();
    });

    test('List snapshot', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const list = render(<List items={data} />);

        expect(list).toMatchSnapshot();
    });

    test('List empty snapshot', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const list = render(<List />);

        expect(list).toMatchSnapshot();
    });
});
