import React, { useState } from 'react';

import ReactSwipeEvents from 'react-swipe-events';

import LikeModal from './LikeModal';

import './ImageContainer.css';

const ImageContainer = props => {

	const [isLikeShowing, setIsLikeShowing] = useState(false);
	const [isLike, setIsLike] = useState();

    const swipeHandler = (e, originalX, originalY, endX, endY, deltaX, deltaY) => {
    	props.toggleMenu(false);
        const Xmovement = Math.abs(originalX - endX);
        const Ymovement = Math.abs(originalY - endY);
        if (Xmovement > 1 || Ymovement > 1) {
            if (Ymovement > Xmovement / 2) {
                if (originalY - endY > 25) {
                    props.onSwipeDownHandler();
                } else if (originalY - endY < -25) {
                    props.onSwipeUpHandler();
                }

            } else {
                if (originalX - endX > 25) {
                	setIsLike(true);
					setIsLikeShowing(true);    
					setTimeout(() => {
						setIsLikeShowing(false);
					}, 600);                
                } else if (originalX - endX < -25) {
                	setIsLike(false);
                    setIsLikeShowing(true);    
					setTimeout(() => {
						setIsLikeShowing(false);
					}, 600);                
                }
            }
        }

    }

    return (
        <ReactSwipeEvents onSwiped={swipeHandler} onSwiping={props.onSwiping}>
        	<>
        		<LikeModal show={isLikeShowing} like={isLike}/>
				<div className={`image ${props.className}`} style={{	backgroundImage: `url('${props.src}')` }}/>
			</>
		</ReactSwipeEvents>
    )
}

export default ImageContainer;