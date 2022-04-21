import { Flex, Skeleton, Spinner, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Api";
import DetailCard from "./DetailCard";

function DetailContainer({ id }) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${api.baseURL}/${id}${api.informaton}?${api.key}`)
      .then((res) => {
        setDetail(res.data);
      })
      .finally(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      {loading ? (
        <Stack
          width="100%"
          gap="20px"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton width="500px" height="70px" />
          <Skeleton width="500px" height="300px" />
          <Skeleton width="300px" height="70px" />
          <Skeleton width="500px" height="400px" />
        </Stack>
      ) : (
        // <Spinner size='xl' color='green.400'/>

        <>
          <DetailCard recipe={detail} />
        </>
      )}
    </>
  );
}

export default DetailContainer;
