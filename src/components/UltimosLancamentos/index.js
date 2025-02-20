import { livros } from './dadosUltimosLancamentos.js'
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../images/livro2.png';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt={"Livro " + livro.nome} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interresse por..."
                subtitulo="Angular 11"
                descricao="Contruindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
            <CardRecomenda
                titulo="Talvez você se interresse por aprender mais na Alura"
                subtitulo="Angular 12"
                descricao="Contruindo uma aplicação completa com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;