import { FormEvent, KeyboardEvent, useState } from "react";
import DataList from "./components/DataList";

import "./App.css";
import "./styles/global.css";

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

	return (
		<main className="p-4 flex-col flex">
			<div className="flex items-end gap-2">
				<div className="flex gap-2 w-fit flex-col">
					<label htmlFor="parent">Level 0</label>
					<input
						value={inputField}
						onChange={handleFormChange}
						onKeyUp={handleKeyUp}
						id="parent"
					/>
				</div>
				<button className="w-fit h-fit" onClick={submit}>
					Add
				</button>
			</div>
			<DataList data={data} />
		</main>
	);
}

export default App;
