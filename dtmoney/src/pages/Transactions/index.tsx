import { Header } from "../../components/Header";
import Summary from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighligt, TransacionalTable, TransactionsContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export default function Transactions() {
    const transactions = useContextSelector(
        TransactionsContext, 
        (context) => {
            return context.transactions
        }
    )

    return (
        <div>
            <Header />
            <Summary />            
            <TransactionsContainer>
                <SearchForm />
                <TransacionalTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>                                    
                                    <td width="50%" data-td="Tipo">{transaction.description}</td>
                                    <td width="50%" data-td="Valor">
                                        <PriceHighligt variant={transaction.type}>
                                            {transaction.type === 'outcome' && '- '}
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighligt>
                                    </td>
                                    <td data-td="Operacao">{transaction.category}</td>
                                    <td data-td="Data">{dateFormatter.format(new Date(transaction.createdAt))}</td>                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </TransacionalTable>
            </TransactionsContainer>
        </div>
    )
}