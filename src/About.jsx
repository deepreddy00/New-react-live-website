import React from 'react';
import web from "../src/images/Iphone.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";

const About = () => {
    return (
        <>
            <Common name="Welcome to About page"
                imgsrc={web}
                visit="./contact"
                btname="Contact now"
            />
        </>
    )
};

export default About;