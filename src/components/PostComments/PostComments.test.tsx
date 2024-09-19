import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve inserir o comentário "Uau!! Que miniatura irada!!"', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: "Uau!! Que miniatura irada!!"
            }        
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));
        expect(screen.getByText('Uau!! Que miniatura irada!!')).toBeInTheDocument();
    });
    it('Deve inserir o comentário "Maneiro, já tive uma igual!!"', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: "Maneiro, já tive uma igual!!"
            }        
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));
        expect(screen.getByText('Maneiro, já tive uma igual!!')).toBeInTheDocument();
    });
})