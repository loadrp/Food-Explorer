import { FoodCard } from "../FoodCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import {
  Slider,
  FoodCardWrapper,
  PrevButton,
  NextButton,
  Title,
  SliderContainer
} from "./style";


export function SliderCards ({ cardTitle, isAdmin, category, foods}) {

  const [firstDisplayed, setFirstDisplayed] = useState(0);

  const displayNext = () => {
    if (firstDisplayed < foods.length - 1) {
      setFirstDisplayed((prev) => prev + 1);
    }
  };

  const displayPrev = () => {
    if (firstDisplayed > 0) {
      setFirstDisplayed((prev) => prev - 1);
    }
  };

  return (
    <>
      <Title>
        <h2>{foods?  cardTitle : null}</h2>
      </Title>
      {foods?
      <SliderContainer>
        
        <PrevButton onClick={displayPrev}>
          <BsChevronLeft size={25} />
        </PrevButton>
        <Slider>
          {foods?.slice(firstDisplayed, firstDisplayed + 5).map((food, index) => (
            <FoodCardWrapper key={index}>
              {console.log(foods)}
              <FoodCard
                id={food.id}
                title={food.name}
                description={food.description}
                price={food.price}
                imgAlt={food.name}
                imgSrc={food.image}
                isAdmin={isAdmin}
                
              />
            </FoodCardWrapper>
          ))}
        </Slider>
        <NextButton onClick={displayNext}>
          <BsChevronRight size={25} />
        </NextButton>
      </SliderContainer>
      : null}
    </>
  );
}