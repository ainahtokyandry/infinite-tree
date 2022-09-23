import { Fragment } from "react";
import ChildForm from "./ChildForm";

const DataList = ({
	data,
}: {
	data: Array<{
		content: string;
		children: Array<any>;
	}>;
}) => (
	<ul>
		{data &&
			data.map((value, key) => (
				<Fragment key={key}>
					{value.content && (
						<li>
							<span>{value.content}</span>
							<ChildForm index={key} data={data} />
						</li>
					)}
				</Fragment>
			))}
	</ul>
);

export default DataList;
