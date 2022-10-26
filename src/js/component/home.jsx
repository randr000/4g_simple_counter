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
const Home = ({a, b, c, d, e, f}) => {
	return (
		<div className="container-fluid ">
			<div className="row d-flex justify-content-center mt-5 p-5">
				<FACard innerValue={<FontAwesomeIcon icon={faClock} />} style={{width: "200px !important"}}/>
				<NumCard innerValue={f}/>
				<NumCard innerValue={e}/>
				<NumCard innerValue={d}/>
				<NumCard innerValue={c}/>
				<NumCard innerValue={b}/>
				<NumCard innerValue={a}/>
			</div>
		</div>
	);
};

export default Home;
