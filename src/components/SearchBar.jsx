import { Button, FormControl, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        navigate(`/search?q=${values.search}`);
    };

    return (
        <Formik
            onSubmit={(values) => onSubmit(values)}
            initialValues={{
                search: "",
            }}
            validate={(values) => {
                const errors = {};
                if (values.search.length <= 2) {
                    errors.search = "Min letters 2";
                }
                return errors;

            }}
        >
            {(props) => (
                <form onSubmit={props.handleSubmit}>
                    <FormControl display='flex' gap='20px'>
                        <Input
                        borderRadius='20px'
                            size="md"
                            id="search"
                            name="search"
                            placeholder="Search"
                            value={props.values.search}
                            onChange={props.handleChange}
                        />
                        <Button type="submit" colorScheme="teal">
                            Search
                        </Button>
                    </FormControl>
                </form>
            )}
        </Formik>
    );
}

export default SearchBar;
