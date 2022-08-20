import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

import BitwiseOperator from '../components/BitwiseOperator';
import BitwiseOperand from '../components/BitwiseOperand';

import { BitwiseOperator as EBitwiseOperator } from '../defs';

interface State {
  value1: number,
  value2: number,
  operatorIndex: number,
}

const calculateValue = (state: State): number => {
  switch(OPERATORS[state.operatorIndex]) {
    case EBitwiseOperator.AND: return state.value1 & state.value2
    case EBitwiseOperator.OR: return state.value1 | state.value2
    case EBitwiseOperator.XOR: return state.value1 ^ state.value2
  }
}

const OPERATORS: EBitwiseOperator[] = [
  EBitwiseOperator.AND,
  EBitwiseOperator.XOR,
  EBitwiseOperator.OR
];

const Home: React.FC = () => {
  const [state, setState] = useState<State>({
    value1: 0xF6E5,
    value2: 0x4F4A,
    operatorIndex: 0,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BitwiseOperand value={state.value1} />

        <div className={styles.secondValue}>
          <BitwiseOperator onClickCallback={() => {
            setState((state) => ({ operatorIndex: 2, ...state }));
          }}  value={OPERATORS[state.operatorIndex]} />
          <BitwiseOperand value={state.value2} />
        </div>

        <BitwiseOperand value={calculateValue(state)} />
      </main>
    </div>
  )
}

export default Home;
