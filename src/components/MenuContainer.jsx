import { HStack, Flex, Text, Icon } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import RecipeCard from "./RecipeCard";
import { GiHealthNormal } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

function MenuContainer() {
  const { menu } = useContext(MenuContext);
  const [time, setTime] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalTime = 0;
    let totalHealthScore = 0;
    let totalPrice = 0;
    menu.forEach((recipe) => {
      totalTime += recipe.readyInMinutes;
      totalHealthScore += recipe.healthScore;
      totalPrice += recipe.pricePerServing;
    });
    totalTime = Math.round((totalTime / menu.length) * 100) / 100;
    totalHealthScore = Math.round((totalHealthScore / menu.length) * 100) / 100;
    totalPrice = Math.round(totalPrice) / 100;
    setTime(totalTime);
    setHealthScore(totalHealthScore);
    setPrice(totalPrice);
  }, [menu]);
  return (
    <>
      {menu.length > 0 ? (
        <Flex gap="15px" justifyContent="center" alignItems="center">
          <Text fontSize="2xl" fontWeight="semibold">
            {" "}
            <Icon as={GiHealthNormal} color="red.400" fontSize="2xl" />{" "}
            {healthScore}{" "}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {" "}
            <Icon as={FaDollarSign} color="green.600" fontSize="2xl" /> {price}{" "}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {" "}
            <Icon as={FaClock} color="purple.700" fontSize="2xl" /> {time}{" "}
            Minutes{" "}
          </Text>
        </Flex>
      )
        : (
          <Text fontSize="2xl" fontWeight="semibold">
            {" "}
            No recipes in menu{" "}
          </Text>
        )}
      <HStack
        wrap="wrap"
        justifyContent="center"
        align="center"
        spacing="0px"
        gap="15px"
        maxWidth='100%'
      >
        {menu.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </HStack>
    </>
  );
}

export default MenuContainer;
