import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./algo";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Semaforo/>
		</div>
	);
};

export default Home;