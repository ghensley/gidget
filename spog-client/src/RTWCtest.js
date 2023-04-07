import reactToWebComponent from "./react-to-webcomponent"
import React from "react"
import * as ReactDOM from "react-dom/client"
import * as PropTypes from "prop-types";
import {Box, Button} from "@mui/material";

const Greeting = (props) => {
    const { title } = props;
    return (
        <Box>
            <h1>{title}</h1>
            <Button variant="contained">MUI Button in RTWC</Button>
        </Box>
    )
}

Greeting.propTypes = {
    title: PropTypes.string.isRequired
}

const RTWCtest = reactToWebComponent(Greeting, React, ReactDOM)
console.log(RTWCtest)
customElements.define("rtwc-test", RTWCtest)
