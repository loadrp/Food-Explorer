import { FoodCard } from "../FoodCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import {
  Slider,
  FoodCardWrapper,
  PrevButton,
  NextButton,
  Title
} from "./style";


export default function SliderCards({ cardTitle, isAdmin }) {
  const foods = [
    { title: "Food 1", description: "Description 1", price: "R$ 9.99", imgSrc:"src/assets/prato1.png", imgAlt: "Prato1" },
    { title: "Food 2", description: "Description 2", price: "R$ 9.99", imgSrc:"src/assets/prato1.png", imgAlt: "Prato1" },
    { title: "Food 3", description: "Description 3", price: "R$ 9.99", imgSrc:"src/assets/prato1.png", imgAlt: "Prato1" },
    { title: "Food 4", description: "Description 4", price: "R$ 9.99", imgSrc:"src/assets/prato1.png", imgAlt: "Prato1" },
    { title: "Food 5", description: "Description 5", price: "R$ 9.99", imgSrc:"src/assets/prato1.png", imgAlt: "Prato1" },
    { title: "Food 6", description: "Description 6", price: "R$ 9.99", imgSrc:"src/assets/prato1.png", imgAlt: "Prato1"},
  ];

  const [firstDisplayed, setFirstDisplayed] = useState(0);

  const displayNext = () => {
    if (firstDisplayed < foods.length) {
      console.log(firstDisplayed,setFirstDisplayed)
      setFirstDisplayed(firstDisplayed);
    }
    else {
      console.log(firstDisplayed,setFirstDisplayed)
      setFirstDisplayed(5);
    }
 
  };

  const displayPrev = () => {
    if (firstDisplayed > 0) {
      setFirstDisplayed(firstDisplayed - 1);
    }
    else {
      setFirstDisplayed(foods.length - 1);
    }
 
   
  };

  return (
    <>

      <Title>
        <h2>{cardTitle}</h2>

      </Title>

      
      <Slider>
        {foods.slice(firstDisplayed, firstDisplayed+5).map((food, index) => (
          <FoodCardWrapper key={index}  >

            <FoodCard
              title={food.title}
              description={food.description}
              price={food.price}
              imgAlt={food.imgAlt}
              imgSrc={food.imgSrc}
              isAdmin={isAdmin}

            />
          </FoodCardWrapper>
        ))}
        
        
          <PrevButton onClick={displayPrev}>
            <BsChevronLeft size={25} />
          </PrevButton>
          <NextButton onClick={displayNext}>
            <BsChevronRight size={25} />
          </NextButton>
        

      </Slider>
      

    </>
  );
}