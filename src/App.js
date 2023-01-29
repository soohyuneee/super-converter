import {useState} from "react";
import KmToMiles from "./components/KmToMiles";
import MinutesToHours from "./components/MinutesToHours";
import CentimetersToInches from "./components/CentimetersToInches";
import PoundsToKg from "./components/PoundsToKg";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		font-size: 17px;
		color: rgb(139, 0, 0);
    font-family: Georgia, 'Times New Roman', Times, serif;
	}
	#container {
		width: 450px;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #EAE0DA;
		}
	h1 {
		font-size: 50px;
    margin-bottom: 30px;
		text-align: center;
	}
	select {
			font-size: 20px;
			background-color: inherit;
			width: 100%;
			height: 50px;
			text-align: center;
			margin-bottom: 30px;
			border: 1px solid rgb(139, 0, 0);
			transition: 0.5s;
			outline-style: none;
			cursor: pointer;
		&:hover {
			background-color: rgb(139, 0, 0);
			color: #EAE0DA;
			transition: 0.5s;
		}
	}
	option {
			font-weight: normal;
			display: block;
			white-space: nowrap;
			min-height: 1.2em;
	}
	hr {
			border: 1.5px dotted rgb(139, 0, 0);
			margin-bottom: 30px;
			width: 100%;
	}
	button {
    font-size: 17px;
    margin: 30px 15px;
    padding: 5px;
    background-color: inherit;
    border: 1px solid rgb(139, 0, 0);
    text-align: center;
    cursor: pointer;
    width: 190px;
    height: 50px;
		&:hover {
			background-color: rgb(139, 0, 0);
			color: #EAE0DA;
			transition: 0.5s;
		}
	}
label {
    font-size: 20px;
    margin: 15px 10px;
	}	
input {
    margin-bottom: 10px;
    background-color: inherit;
    width: 30%;
    padding-bottom: 1px;
		outline-style: none;
		border: none;
		border-bottom: 1px solid rgb(139, 0, 0);
		&:disabled{
			border: none;
		}
	}
`;

function App() {
	const [index, setIndex] = useState("0");
	const onSelect = (event) => {
		setIndex(event.target.value);
	};
	return (
		<>
			<GlobalStyle />
			<div id="container">
				<h1>Super Converter</h1>
				<select value={index} onChange={onSelect}>
					<option value="0">Select your units</option>
					<option value="1">Minutes & Hours</option>
					<option value="2">Km & Miles</option>
					<option value="3">Centimeters & Inches</option>
					<option value="4">Pounds & Kg</option>
				</select>
				<hr />
				{index === "0" ? <p>Please select your units.</p> : null}
				{index === "1" ? <MinutesToHours /> : null}
				{index === "2" ? <KmToMiles /> : null}
				{index === "3" ? <CentimetersToInches /> : null}
				{index === "4" ? <PoundsToKg /> : null}
			</div>
		</>
	);
}

export default App;
