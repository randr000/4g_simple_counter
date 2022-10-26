import React from "react";

//components
import NumCard from './num-card.jsx';
import FACard from './fa-card.jsx';

//font awesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({numArr}) => {
	return (
		<div className="container-fluid ">
			<div className="row d-flex justify-content-center mt-5 p-5">
				<FACard innerValue={<FontAwesomeIcon icon={faClock} />} />
				<NumCard innerValue={numArr[0]}/>
				<NumCard innerValue={numArr[1]}/>
				<NumCard innerValue={numArr[2]}/>
				<NumCard innerValue={numArr[3]}/>
				<NumCard innerValue={numArr[4]}/>
				<NumCard innerValue={numArr[5]}/>
			</div>
		</div>
	);
};

export default Home;
