import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Test <Post />', () => {
    it('Redenrizando corretamente e se o texto "Teste" está presente no documento redenrizado', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
});