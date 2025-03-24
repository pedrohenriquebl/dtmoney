import { Header } from "../../components/Header";
import Summary from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighligt, TransacionalTable, TransactionsContainer } from "./styles";

export default function Transactions() {
    return (
        <div>
            <Header />
            <Summary />            
            <TransactionsContainer>
                <SearchForm />
                <TransacionalTable>
                    <tbody>
                        <tr>
                            <td width="50%" data-td="Tipo">Desenvolvimento de site</td>
                            <td width="50%" data-td="Valor"><PriceHighligt variant="income">R$ 12.000,00</PriceHighligt></td>
                            <td data-td="Operacao">Venda</td>
                            <td data-td="Data">12/09/2024</td>
                        </tr>
                        <tr>
                            <td width="50%" data-td="Tipo">Hamburguer</td>
                            <td width="50%" data-td="Valor"><PriceHighligt variant="outcome">- R$ 50,00</PriceHighligt></td>
                            <td data-td="Operacao">Venda</td>
                            <td data-td="Data">12/09/2023</td>
                        </tr>
                    </tbody>
                </TransacionalTable>
            </TransactionsContainer>
        </div>
    )
}