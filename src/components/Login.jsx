import {
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Heading,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.css";

function Login() {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [handleClick, setHandleClick] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const MySwal = withReactContent(Swal);

    const handleInputChange = (e) => setInput(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const navigate = useNavigate();

    useEffect(() => {
        if (handleClick) {
            setIsLoading(true);
            axios
                .post("http://challenge-react.alkemy.org/", {
                    email: input,
                    password: password,
                })
                .then((res) => {
                    if (res.data.token) {
                        localStorage.setItem("token", res.data.token);
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                    if (localStorage.getItem("token")) {
                        navigate("/");
                    }
                })

                .catch((err) => {
                    MySwal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${err}`,
                        footer: '<a href="">Why do I have this issue?</a>',
                    });
                });
            setHandleClick(false);
        }
    }, [handleClick]);

    const isError = input === "" || password === "";

    return (
        <VStack
            align="center"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            minWidth="100%"
            padding="20px"
        >
            <Flex
                flexDirection="column"
                gap="20px"
                padding="50px"
                paddingY="100px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="gray.200"
                borderRadius="17px"
                width="3xl"
                maxWidth="100%"
            >
                <Heading as="h2" size="2xl">
                    Hi, welcome!{" "}
                </Heading>

                <FormControl
                    isInvalid={isError}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    gap="10px"
                >
                    <Input
                        id="email"
                        type="email"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                        backgroundColor="gray.300"
                        width="350px"
                        maxWidth="100%"
                    />

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        backgroundColor="gray.300"
                        width="350px"
                        maxWidth="100%"
                    />
                    {isError && (
                        <FormErrorMessage>
                            Email and password are required.
                        </FormErrorMessage>
                    )}

                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="button"
                        onClick={() => setHandleClick((res) => !res)}
                        isLoading={isLoading ? true : false}
                        isDisabled={isError}
                    >
                        Login
                    </Button>
                </FormControl>
            </Flex>
        </VStack>
    );
}

export default Login;
