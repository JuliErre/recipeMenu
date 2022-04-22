import { Heading, Image, VStack, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import parse from "html-react-parser";
import { FaLeaf } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import AddButton from "./AddButton";


function DetailCard({ recipe }) {
  const healthScore = Math.round(recipe.healthScore);
  const price = Math.round(recipe.pricePerServing) / 100
  return (
    <VStack padding="50px" gap="25px">
      <Heading as="h3" size="2xl" fontWeight="semibold">
        {" "}
        {recipe.title}{" "}
      </Heading>
      <Image
        src={recipe.image}
        alt={recipe.title}
        objectFit="cover"
        borderRadius="15px"
      />


      <Flex gap="15px" justifyContent="center" alignItems="center">

        {recipe.vegan === true && <Text fontSize="2xl" fontWeight="semibold" textAlign='center'> <Icon as={FaLeaf} color='green' fontSize='2xl' /> Vegan </Text>}
        <Text fontSize="2xl" fontWeight="semibold"> <Icon as={GiHealthNormal} color='red.400' fontSize='2xl' /> {healthScore} </Text>
        <Text fontSize="2xl" fontWeight="semibold"> <Icon as={FaDollarSign} color='green.600' fontSize='2xl' /> {price} </Text>
        <Text fontSize="2xl" fontWeight="semibold"> <Icon as={FaClock} color='purple.700' fontSize='2xl' /> {recipe.readyInMinutes} Minutes </Text>
      </Flex>

      <AddButton recipe={recipe} />


      <Text fontSize='md'>{parse(String(recipe.summary))}</Text>
    </VStack>
  );
}

export default DetailCard;
