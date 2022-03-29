import React from 'react';

interface Props {
	id: string;
    title: string;
    row: number;
    col: number;
}

const TextArea: React.FunctionComponent<Props> = ({id, title, row, col}) => {
	return (
		<>
			<label htmlFor={id} className="block text-sm font-thin text-white">
				{title}
			</label>
			<div className="mt-1">
				<textarea
					rows={row}
                    cols={col}
					name={id}
					id={id}
					className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
					aria-describedby={`${id}-description`}
				/>
			</div>
		</>
	);
};

export default TextArea;
