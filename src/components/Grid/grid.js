import React from 'react';

import { Wrapper, Content } from './Grid.Style';
import PropTypes from 'prop-types';

const Grid = (props) => (
    <Wrapper>
        <h1>{props.header}</h1>
        <Content>{props.children}</Content>
    </Wrapper>
);
Grid.propTypes = {
    header: PropTypes.string,
}

export default Grid;