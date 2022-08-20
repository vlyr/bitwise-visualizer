import React from 'react';
import { BitwiseOperator as EBitwiseOperator } from '../defs';
import styles from '../styles/BitwiseOperator.module.css';

const displayOperator = (op: EBitwiseOperator): string => {
  switch(op) {
    case EBitwiseOperator.AND: return '&'
    case EBitwiseOperator.XOR: return '^'
    case EBitwiseOperator.OR: return '|'
  }
}

interface BitwiseOperatorProps {
  value: EBitwiseOperator;
  onClickCallback: () => void;
}

const BitwiseOperator: React.FC<BitwiseOperatorProps> = ({ value, onClickCallback }) => {
  return (
    <button
      onClick={() => { onClickCallback() }}
      className={styles.bitwiseOperator}>{displayOperator(value)}
    </button>
  )
}

export default BitwiseOperator;
