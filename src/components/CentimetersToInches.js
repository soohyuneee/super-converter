import {useState} from "react";

function CentimetersToInches() {
	const [amount, setAmount] = useState(0);
	const [inverted, setInverted] = useState(false);
	const onChange = (event) => {
		setAmount(event.target.value);
	};
	const reset = () => setAmount(0);
	const onFlip = () => {
		reset();
		setInverted((current) => !inverted);
	};
	return (
		<>
			<div>
				<label htmlFor="cm">Centimeters</label>
				<input
					value={inverted ? (amount * 2.54).toFixed(2) : amount}
					id="cm"
					type="number"
					placeholder="Centimeters"
					onChange={onChange}
					disabled={inverted}
				/>
			</div>
			<div>
				<label htmlFor="inches">Inches</label>
				<input
					value={inverted ? amount : (amount / 2.54).toFixed(2)}
					id="inches"
					type="number"
					placeholder="Inches"
					onChange={onChange}
					disabled={!inverted}
				/>
			</div>
			<button onClick={reset}>Reset</button>
			<button onClick={onFlip}>{inverted ? "Turn Back" : "Invert"}</button>
		</>
	);
}

export default CentimetersToInches;
