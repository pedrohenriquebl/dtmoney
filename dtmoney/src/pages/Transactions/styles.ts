import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const TransacionalTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;

            @media (max-width: 768px) {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;

            @media (max-width: 768px) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }        

    @media (max-width: 768px) {
        tr {
            display: flex;
            flex-direction: column;
            margin: 0.5rem 0;            
        }

        td {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 100% !important;

            &:first-child {
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;                
            }

            &:last-child {
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;                
            }

            &::before {
                content: attr(data-td);
                font-weight: 700;
                font-size: 0.875rem;
                color: ${props => props.theme['gray-300']};
                margin-bottom: 0.5rem;
                display: block;
            }
        }
    }
 
`;

interface PriceHighligtProps {
    variant: 'income' | 'outcome';
}

export const PriceHighligt = styled.span<PriceHighligtProps>`
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`;