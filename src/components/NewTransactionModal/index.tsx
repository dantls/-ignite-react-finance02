import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox} from './styles';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: ()=>void;
}

export function NewTransactionModal(props:NewTransactionModalProps){
  const {isOpen, onRequestClose} = props;
  const [type, setType] = useState('deposit');

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"

    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título"
        />
        <input 
          placeholder="Valor"
          type="number"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={()=> {setType('deposit')}}

            // className={type==='deposit'? 'active' : ''}
          > 
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            type="button"
            activeColor="red"
            onClick={()=> {setType('withdraw')}}
          > 
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>

      </Container> 

    </Modal>
  )
}