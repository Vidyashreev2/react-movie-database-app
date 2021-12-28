import React from 'react';
import {Image} from  './thumb.style';
import { Link} from 'react-router-dom';

const Thumb = ({image, movieId, clickable})=>(
    <div>
        {clickable?(
            <Link to={`/${movieId}`}>
            <Image src = {image} alt = "alternate image"/>
        </Link>)
        :  <Image src = {image} alt = "alternate image"/>
        }
    </div>
)

export default Thumb;