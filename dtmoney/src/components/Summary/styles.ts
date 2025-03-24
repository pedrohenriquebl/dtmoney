import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0.15rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1rem;
    }
`;

interface SummaryCardProps {
    variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
        background: ${props.theme['green-500']};
    `}
`;
