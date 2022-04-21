import { Box, Button, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

function RecipeCard({ recipe }) {
  let navigate = useNavigate();
  const onClick = () => {
    navigate(`/detail/${recipe.id}`);
  };
  return (
    <HStack
      cursor="pointer"
      maxWidth="100%"
      spacing="0px"
      width="26rem"
      justifyContent="flex-start"
      align="flex-start"
      gap="0px"
      backgroundColor="gray.100"
      boxShadow="1px 1px 10px black "
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        objectFit="cover"
        boxSize={{ base: "165px", md: "190px" }}
      />

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        pl="20px"
        pt="20px"
        pr="5px"
      >
        <Flex>
          <Heading fontWeight="bold" size="md">
            {recipe.title}
          </Heading>
        </Flex>

        <Flex
          maxWidth="130px"
          marginTop="10px"
          flexDirection="column"
          justify="center"
          gap="5px"
        >
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={onClick}
            size="md"
          >
            {" "}
            Detail{" "}
          </Button>
          <DeleteButton id={recipe.id} />
        </Flex>
      </Box>
    </HStack>
  );
}

export default RecipeCard;
