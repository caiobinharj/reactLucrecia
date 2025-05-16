import React, { useState } from 'react';
import styled from 'styled-components';

const HeartApp = () => {
    const [showHearts, setShowHearts] = useState(false);

    return (
        <AppContainer>
            {/* Flores laterais grandes */}
            <LeftFlowers>
                <FlowerColumn>
                    <LargeFlower src="/rose.jpeg" alt="Rosa" />
                    <LargeFlower src="/lavender.jpeg" alt="Lavanda" />
                </FlowerColumn>
            </LeftFlowers>

            <RightFlowers>
                <FlowerColumn>
                    <LargeFlower src="/sunflower.jpeg" alt="Girassol" />
                    <LargeFlower src="/orchid.jpeg" alt="Orquídea" />
                </FlowerColumn>
            </RightFlowers>

            {/* Conteúdo central */}
            <ContentContainer>
                <Title>Para Lucrecia, mi Cielo!</Title>

                <HeartsContainer>
                    <HeartsWrapper>
                        <HeartImage src="/coracaoLucrecia.jpg" alt="Corazón de Lucrecia" />
                        {showHearts && (
                            <RightHeartImage
                                src="/coracaoCaio.jpg"
                                alt="Mi corazón"
                            />
                        )}
                    </HeartsWrapper>
                </HeartsContainer>

                <MysteryButton onClick={() => setShowHearts(true)}>
                    ¿Qué hace ese botón debajo de corazón solitario?
                </MysteryButton>

                {showHearts && (
                    <MessageBox>
                        <p>Así como nuestros corazones se completan, quiero completar tu vida de amor y felicidad.</p>
                        <p>Perdón por olvidar el corazón, pero nunca olvidaré lo que siento por ti.</p>
                    </MessageBox>
                )}
            </ContentContainer>
        </AppContainer>
    );
};

// Styled Components
const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    font-family: 'Arial', sans-serif;
    position: relative;
    overflow: hidden;
`;

// Flores da esquerda (ocupando toda a altura)
const LeftFlowers = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 0;
`;

// Flores da direita (ocupando toda a altura)
const RightFlowers = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 0;
`;

const FlowerColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 20px;
`;

const LargeFlower = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    object-fit: contain;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));

    &:hover {
        transform: scale(1.05);
    }
`;

// Container do conteúdo central
const ContentContainer = styled.div`
    text-align: center;
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 90%;
    position: relative;
    z-index: 1;
`;

const Title = styled.h1`
    color: #e74c3c;
    margin-bottom: 2rem;
    font-size: 1.8rem;
`;

const HeartsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    position: relative;
`;

const HeartsWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

const HeartImage = styled.img`
    width: 160px;
    height: 160px;
    object-fit: contain;
`;

// Componente específico para o coração direito com o estilo necessário
const RightHeartImage = styled(HeartImage)`
    margin-left: -45px;
`;

const MysteryButton = styled.button`
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);

    &:hover {
        background-color: #c0392b;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(231, 76, 60, 0.6);
    }
`;

const MessageBox = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 10px;

    p {
        color: #333;
        line-height: 1.6;
        margin: 0.5rem 0;
    }
`;

export default HeartApp;