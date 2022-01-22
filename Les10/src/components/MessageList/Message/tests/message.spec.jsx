import { Message } from "..";
import { render, screen } from '@testing-library/react';


describe('Message component', () => {
    it('renders authors name if not human', () => {
        render(<Message author='bot' text='test text' />);

        const el = screen.getByText('bot: test text');
        expect(el).toBeDefined();
    });

    it('matches snapshot', () => {
        const component = render(<Message author="bot" text="test text" />);
        expect(component).toMatchSnapshot();
    })
})