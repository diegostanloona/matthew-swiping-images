import React, { useState, useEffect } from 'react';

import ImageContainer from './ImageContainer';

import './ImageList.css';

const ImageList = props => {

    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * 30));
    const [previousImageIndex, setPreviousImageIndex] = useState(currentImageIndex === 0 ? 29 : currentImageIndex - 1);
    const [nextImageIndex, setNextImageIndex] = useState(currentImageIndex === 29 ? 0 : currentImageIndex + 1);
    const [currentImageStatus, setCurrentImageStatus] = useState("shown");

    const [distanceSwiped, setDistanceSwiped] = useState(0);

    const images = [
        "images/tinified/1.jpg",
        "images/tinified/2.jpg",
        "images/tinified/3.jpg",
        "images/tinified/4.jpg",
        "images/tinified/5.jpg",
        "images/tinified/6.jpg",
        "images/tinified/7.jpg",
        "images/tinified/8.jpg",
        "images/tinified/9.jpg",
        "images/tinified/10.jpg",
        "images/tinified/11.jpg",
        "images/tinified/12.jpg",
        "images/tinified/13.jpg",
        "images/tinified/14.jpg",
        "images/tinified/15.jpg",
        "images/tinified/16.jpg",
        "images/tinified/17.jpg",
        "images/tinified/18.jpg",
        "images/tinified/19.jpg",
        "images/tinified/20.jpg",
        "images/tinified/21.jpg",
        "images/tinified/22.jpg",
        "images/tinified/23.jpg",
        "images/tinified/24.jpg",
        "images/tinified/25.jpg",
        "images/tinified/26.jpg",
        "images/tinified/27.jpg",
        "images/tinified/28.jpg",
        "images/tinified/29.jpg",
        "images/tinified/30.jpg"
    ];
    useEffect(() => {
        images.forEach((image) => {
            new Image().src = image;
        })
    }, [images]);

    // const animateImageIncrease = (callback) => {
    //     let dist = distanceSwiped;
    //     const interval = setInterval(()=>{
    //         setDistanceSwiped(dist);
    //         dist+=15;
    //         if(dist>=window.innerHeight/2.2){
    //             clearInterval(interval);
    //             callback();
    //         }
    //     }, 1);
    // }

    // const animateImageDecrease = (callback) => {
    //     let dist = distanceSwiped;
    //     const interval = setInterval(()=> {
    //         setDistanceSwiped(dist);
    //         dist-=15;
    //         if(dist<=-1*window.innerHeight/2.2){
    //             clearInterval(interval);
    //             callback();
    //         }
    //     }, 1);
    // }

    const increaseImageIndexHandler = () => {
            setCurrentImageIndex(currentImageIndex === 29 ? 0 : currentImageIndex + 1);
            setPreviousImageIndex(previousImageIndex === 29 ? 0 : previousImageIndex + 1);
            setNextImageIndex(nextImageIndex === 29 ? 0 : nextImageIndex + 1);
            setDistanceSwiped(0);        
    }

    const decreaseImageIndexHandler = () => {
            setCurrentImageIndex(currentImageIndex === 0 ? 29 : currentImageIndex - 1);
            setPreviousImageIndex(previousImageIndex === 0 ? 29 : previousImageIndex - 1);
            setNextImageIndex(nextImageIndex === 0 ? 29 : nextImageIndex - 1);
            setDistanceSwiped(0);        
    }

    const onSwipingHandler = (e, originalX, originalY, currentX, currentY, deltaX, deltaY) => {
    	if(Math.abs(originalY - currentY) > Math.abs(originalX - currentX) / 2){
    		setDistanceSwiped(originalY - currentY);
    	}
    }

    return ( 
    	<>
        <ImageContainer toggleMenu={props.toggleMenu} className={currentImageStatus} src={images[currentImageIndex]} onSwipeUpHandler={decreaseImageIndexHandler} onSwipeDownHandler={increaseImageIndexHandler} onSwiping={onSwipingHandler}/> 
        <img className = "transition-image previous-image" src = { images[previousImageIndex] } alt = ""
        style = { { top: `calc(-70vh - ${distanceSwiped*2.5}px)`, 
        			width: `calc(60vw + ${40*Math.abs(distanceSwiped*2.1)/window.innerHeight}vw)`,
        			left: `calc(20vw - ${20*Math.abs(distanceSwiped*2.1)/window.innerHeight}vw)`,
                    height: `calc(60vh + ${40*Math.abs(distanceSwiped*2.1)/window.innerHeight}vh)`,
                    opacity: Math.abs(distanceSwiped)/window.innerHeight
                } 
        }/>
        <img className = "transition-image next-image" src = { images[nextImageIndex] } alt = ""
        style = { { top: `calc(70vh - ${distanceSwiped*2.5}px)`, 
        			width: `calc(60vw + ${40*Math.abs(distanceSwiped*2.1)/window.innerHeight}vw)`,
        			left: `calc(20vw - ${20*Math.abs(distanceSwiped*2.1)/window.innerHeight}vw)`,
                    height: `calc(60vh + ${40*Math.abs(distanceSwiped*2.1)/window.innerHeight}vh)`,
                    opacity: Math.abs(distanceSwiped)/window.innerHeight
                } 
        } /> 
        </>
    )
}

export default ImageList;