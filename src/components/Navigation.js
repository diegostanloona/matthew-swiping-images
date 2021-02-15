import React, { useState } from 'react';

import { IconContext } from "react-icons";

import { IoEllipsisHorizontalCircle, IoAlertCircleOutline, IoChatbubbleOutline, IoPersonOutline, IoPersonAddOutline, IoAddCircleOutline } from "react-icons/io5";

import './Navigation.css';

const Navigation = props => {

	return(
		<>
		<div className='navigation'>
			<div className={`navigation-tooltip ${props.isMenuShowing && 'hidden'}`} onClick={()=>{props.toggleMenu(true)}}>
				<IconContext.Provider value={{ color: "#FFFFFF", size: "2.5em"}}>
					<IoEllipsisHorizontalCircle/>
				</IconContext.Provider>
			</div>
		</div>
		<div className='navigation'>
			<div className={`navigation-menu ${!props.isMenuShowing && 'hidden'}`}>
				<IconContext.Provider value={{ color: "#FFFFFF", size: "1.8em"}}>
					<div className='row'>
						<div className='col'>
							<IoAddCircleOutline/>
							<span>Post</span>
						</div>
						<div className='col'>
							<IoPersonAddOutline/>
							<span>Follow</span>
						</div>
						<div className='col'>
							<IoChatbubbleOutline/>
							<span>Comment</span>
						</div>
						<div className='col'>
							<IoAlertCircleOutline/>
							<span>Report</span>
						</div>
						<div className='col'>
							<IoPersonOutline/>
							<span>My Feed</span>
						</div>
					</div>
				</IconContext.Provider>
			</div>
		</div>
		</>
	);
}

export default Navigation;