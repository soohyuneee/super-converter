import {useState} from "react";

function PoundsToKg() {
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
				<label htmlFor="pound">Pounds</label>
				<input
					value={inverted ? (amount * 2.205).toFixed(2) : amount}
					id="pound"
					type="number"
					placeholder="Pounds"
					onChange={onChange}
					disabled={inverted}
				/>
			</div>
			<div>
				<label htmlFor="kg">Kg</label>
				<input
					value={inverted ? amount : (amount / 2.205).toFixed(2)}
					id="kg"
					type="number"
					placeholder="Kg"
					onChange={onChange}
					disabled={!inverted}
				/>
			</div>
			<button onClick={reset}>Reset</button>
			<button onClick={onFlip}>{inverted ? "Turn Back" : "Invert"}</button>
		</>
	);
}

export default PoundsToKg;
