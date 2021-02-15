import React from 'react';

import { IconContext } from "react-icons";

import { IoHeart, IoHeartDislike } from "react-icons/io5";

import './LikeModal.css';

const LikeModal = props => {
	return(
		<div className={`icon-container ${!props.show && "hide"}`}>
			<IconContext.Provider value={{ color: "#8a0032", size: "4.5em"}}>
				{
					props.like && <IoHeart/>
				}
				{
					!props.like && <IoHeartDislike/>
				}
			</IconContext.Provider>
		</div>
		
	);
}

export default LikeModal;