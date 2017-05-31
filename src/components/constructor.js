import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-addons';

const RenderPeople = ({props}) => {
	
		return (
			<div>
			 <CSSTransitionGroup
			 	transitionName="list-anim"
			 	transitionEnterTimeout={500}
			 	transitionLeaveTimeout={500}>
			 	{this.props.itemList.map((item, index) => {
			 		return (
			 			<li key={index} className="list-item">
			 				{item}
			 				<div 
			 					className="close"
			 					onClick={props.removePeople.bind(null, index)}>
			 					-
			 				</div>
			 			</li>
			 		);
			 	})}
			</CSSTransitionGroup>
		</div>
		);
	}


export default RenderPeople;