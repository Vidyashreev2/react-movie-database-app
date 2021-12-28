import React from "react";
import { Content, Wrapper, Text } from './heroImage.style';
import PropTypes from 'prop-types';


const HeroImage = (prop) => (
    <Wrapper image={prop.image}>
        <Content>
            <Text>
                <h1>{prop.title}</h1>
                <p> {prop.text}</p>
            </Text>
        </Content>

    </Wrapper>
);

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default HeroImage;