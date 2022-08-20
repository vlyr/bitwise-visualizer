import React from 'react';

interface BitwiseOperandProps {
  value: number;
}

const BitwiseOperand: React.FC<BitwiseOperandProps> = ({ value }) => {
  let buffer = "";
  let valueString = value.toString(2);

  while((valueString.length % 8)) {
    valueString = "0".concat(valueString);
  }

  valueString = buffer.concat(valueString);


  return (
    <div>{valueString}</div>
  )
}

export default BitwiseOperand;
