import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0 125px 0;
        height: 270px;
        width: 100%;
`;

const Titulo = styled.h2`
    color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`;

const Resultados = styled.div`
    width: 100%;
    height: 150px;
    padding-top: 10px;
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 90px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa instante</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    if (textoDigitado === "") {
                        setLivrosPesquisados([]);
                    } else {
                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                        setLivrosPesquisados(resultadoPesquisa);
                    }
                }}
            />
            <Resultados>
                {livrosPesquisados.map(livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt={livro.nome} />
                    </Resultado>
                ))}
            </Resultados>
        </PesquisaContainer>
    )
}

export default Pesquisa;