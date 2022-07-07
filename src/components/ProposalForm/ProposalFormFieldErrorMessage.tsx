import React from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';

interface Props {
	message?: string;
}

const ProposalFormFieldErrorMessage: React.FunctionComponent<Props> = ({ message }) => {
	return (
		<React.Fragment>
			<div className='mt-2'>
				<span className="inline-flex items-center text-sm font-normal text-red-500 gap-x-2">
					<ExclamationIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
					{message}
				</span>
			</div>
		</React.Fragment>
	);
};

export default ProposalFormFieldErrorMessage;
