import { FormEvent, KeyboardEvent, useState } from "react";
import "./App.css";
import DataList from "./components/DataList";

function App() {
	const [inputField, setInputField] = useState("");
	const [data, setData] = useState<
		Array<{
			content: string;
			children: Array<any>;
		}>
	>([{ content: "", children: [] }]);

	const handleFormChange = (event: FormEvent<HTMLInputElement>) => {
		setInputField(event.currentTarget.value);
	};

	const submit = () => {
		setData([{ content: inputField, children: [] }, ...data]);
		setInputField("");
	};

	const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			submit();
		}
	};

	// const addHandler = (e: FormEvent<HTMLButtonElement>) => {};
	return (
		<>
			<div>
				<input
					placeholder="Content"
					value={inputField}
					onChange={handleFormChange}
					onKeyUp={handleKeyUp}
				/>
				<DataList data={data} />
				<button onClick={submit}>Submit</button>
			</div>
		</>
	);
}

export default App;
