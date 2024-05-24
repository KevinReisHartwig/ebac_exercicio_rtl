import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test <App />', () => {
    it('Renderiza o botão de comentário corretamente', () => {
        render(<App />);
        const commentButton = screen.getByTestId('comment-button');
        expect(commentButton).toBeInTheDocument();
    });
});