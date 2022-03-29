import React from 'react';

interface Props {
	id: string;
    title: string;
    subTitle?: string;
    type: string;
}

const InputBox: React.FunctionComponent<Props> = ({id, title, subTitle, type}) => {
	return (
		<>
            { subTitle && (
                <label htmlFor={id} className="block text-sm font-thin text-white">
                    {subTitle}
                </label>
            )}			
			<div className="mt-1">
				<input
					type={type}
					name={id}
					id={id}
					className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
					aria-describedby={`${id}-description`}
				/>
			</div>
			<p className="mt-2 text-sm font-thin text-white" id={`${id}-description`}>
				{title}
			</p>
		</>
	);
};

export default InputBox;
