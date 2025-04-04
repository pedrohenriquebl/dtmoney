import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface CreateTransactionInput {
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome',
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransacationsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransacationsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
                _sort: 'createdAt',
                _order: 'desc'
            }
        })

        setTransactions(response.data);
    }

    async function createTransaction(data: CreateTransactionInput) {
        const { description, price, category, type } = data;

        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        });
        
        setTransactions(state => [response.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, fetchTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}