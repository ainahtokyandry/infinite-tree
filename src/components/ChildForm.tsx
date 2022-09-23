import { FormEvent, KeyboardEvent, useState } from "react";
import DataList from "./DataList";

const ChildForm = ({
	data,
	index,
}: {
	data: Array<{
		content: string;
		children: Array<any>;
	}>;
	index: number;
}) => {
	const [inputChild, setInputChild] = useState("");

	const submitChild = () => {
		if (data[index].children)
			data[index].children = [...data[index].children, { content: inputChild }];
		data[index].children = [{ content: inputChild }];
		setInputChild("");
	};

	const handleChildFormChange = (event: FormEvent<HTMLInputElement>) => {
		setInputChild(event.currentTarget.value);
	};

	const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			submitChild();
		}
	};

	return (
		<div>
			<input
				placeholder="Child content"
				value={inputChild}
				onChange={handleChildFormChange}
				onKeyUp={handleKeyUp}
			/>
			<DataList data={data[index].children} />
			<button onClick={submitChild}>Submit</button>
		</div>
	);
};

export default ChildForm;
