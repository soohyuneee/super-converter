import {useState} from "react";

function KmToMiles() {
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
				<label htmlFor="km">Km</label>
				<input
					value={inverted ? (amount * 0.62137).toFixed(2) : amount}
					id="km"
					type="number"
					placeholder="Km"
					onChange={onChange}
					disabled={inverted}
				/>
			</div>
			<div>
				<label htmlFor="miles">Miles</label>
				<input
					value={inverted ? amount : (amount / 0.62137).toFixed(2)}
					id="miles"
					type="number"
					placeholder="Miles"
					onChange={onChange}
					disabled={!inverted}
				/>
			</div>
			<button onClick={reset}>Reset</button>
			<button onClick={onFlip}>{inverted ? "Turn Back" : "Invert"}</button>
		</>
	);
}

export default KmToMiles;
