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


export function SliderCards ({ cardTitle, isAdmin, onUpdateTotalItems }) {
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
        <h2>{cardTitle}</h2>
      </Title>

      <SliderContainer>
        <PrevButton onClick={displayPrev}>
          <BsChevronLeft size={25} />
        </PrevButton>
        <Slider>
          {foods.slice(firstDisplayed, firstDisplayed + 5).map((food, index) => (
            <FoodCardWrapper key={index}>
              <FoodCard
                onUpdateTotalItems={onUpdateTotalItems}
                title={food.title}
                description={food.description}
                price={food.price}
                imgAlt={food.imgAlt}
                imgSrc={food.imgSrc}
                isAdmin={isAdmin}
              />
            </FoodCardWrapper>
          ))}
        </Slider>
        <NextButton onClick={displayNext}>
          <BsChevronRight size={25} />
        </NextButton>
      </SliderContainer>
    </>
  );
}