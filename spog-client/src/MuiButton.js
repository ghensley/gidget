import reactToWebComponent from "./react-to-webcomponent"
import React from "react"
import * as ReactDOM from "react-dom/client"
import * as PropTypes from "prop-types";
import {Button} from "@mui/material";

const MuiButton = (props) => {
    const { title, onClick } = props;
    return (
        <Button onClick={onClick} variant="contained">{title}</Button>
    )
}

MuiButton.propTypes = {
    title: PropTypes.node,
    onClick: PropTypes.func
}

const MuiButtonWC = reactToWebComponent(MuiButton, React, ReactDOM, )
customElements.define("mui-button", MuiButtonWC)
