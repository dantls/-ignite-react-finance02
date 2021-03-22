import {createContext, ReactNode, useEffect, useState,useContext} from 'react';
import { api } from '../services/api';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id'|'createdAt'>;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) =>Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;

}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);


export function TransactionProvider( props: TransactionProviderProps) {
  
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    api('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[]);


  async function createTransaction(transactionInput:TransactionInput){
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const {transaction} = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}