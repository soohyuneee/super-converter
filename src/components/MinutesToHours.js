import {useState} from "react";

function MinutesToHours() {
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
				<label htmlFor="minutes">Minutes</label>
				<input value={inverted ? amount * 60 : amount} id="minutes" type="number" placeholder="Minutes" onChange={onChange} disabled={inverted} />
			</div>
			<div>
				<label htmlFor="hours">Hours</label>
				<input
					value={inverted ? amount : (amount / 60).toFixed(2)}
					id="hours"
					type="number"
					placeholder="Hours"
					onChange={onChange}
					disabled={!inverted}
				/>
			</div>
			<button onClick={reset}>Reset</button>
			<button onClick={onFlip}>{inverted ? "Turn Back" : "Invert"}</button>
		</>
	);
}

export default MinutesToHours;
