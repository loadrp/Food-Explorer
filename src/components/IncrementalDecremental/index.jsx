import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Wrapper, ButtonCard, Value } from './style'

const IncrementDecrement = ({ onIncrement, onDecrement }) => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if(count<=0){
    
      return null;
    }
    setCount(count - 1);
  };

  const incrementCount = () => {
   
    setCount(count + 1);
  };

 
    return (
      <Wrapper>
        <ButtonCard onClick={decrementCount}>-</ButtonCard>
        <Value>{count.toString().padStart(2, '0')}</Value>
        <ButtonCard onClick={incrementCount}>+</ButtonCard>
      </Wrapper>
    );
  
};

export default IncrementDecrement;