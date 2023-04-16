import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Wrapper, Button, Value } from './style'

const IncrementDecrement = ({ value, onIncrement, onDecrement }) => {
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
        <Button onClick={decrementCount}>-</Button>
        <Value>{count.toString().padStart(2, '0')}</Value>
        <Button onClick={incrementCount}>+</Button>
      </Wrapper>
    );
  
};

export default IncrementDecrement;