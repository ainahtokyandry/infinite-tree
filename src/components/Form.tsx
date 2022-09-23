import { FormEvent, useState } from "react";

const Form = ({ reference = 0 }: { reference?: number }) => {
	const [data, setData] = useState<Array<{ content: string; children?: [] }>>(
		[]
	);
	const [dynamicInput, setDynamicInput] = useState<Array<{ content: string }>>([
		{ content: "" },
	]);
	const [currentValue, setCurrrentValue] = useState("");

	const changeHandler = (e: FormEvent<HTMLInputElement>, key: number) => {
		setCurrrentValue(e.currentTarget.value);
		console.log("voaantso ty");
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>, key: number) => {
		e.preventDefault();
		dynamicInput[key].content.trim();

		if (dynamicInput[key].content) {
			setData([...data, { content: dynamicInput[key].content }]);
			setDynamicInput([...dynamicInput, { content: "" }]);
		}
	};
	return (
		<form
			onSubmit={(e: FormEvent<HTMLFormElement>) => submitHandler(e, reference)}
		>
			<div>
				<label htmlFor="jsonInput">
					{reference ? "Will be added as child node " : "Add node "}
				</label>
				<input type="text" id="jsonInput" maxLength={20} />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
