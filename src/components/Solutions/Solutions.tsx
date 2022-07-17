import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon";
import richTextOptions from "../../utils/richTextOptions";

import LoadingSkeleton from "./SolutionsLoadingSkeleton";
import ErrorBoundary from "./SolutionsErrorBoundary";

interface Props {
	query: DocumentNode;
}

const Solutions: React.FunctionComponent<Props> = ({ query }) => {
	const id = React.useId();

	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language } });

	if (loading) return <LoadingSkeleton quantity={2} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 py-12 lg:grid-cols-2 lg:gap-x-8">
				{data && data.solutions && (
					<React.Fragment>
						<div className="flex flex-col gap-y-4">
							<h5 className="text-lg font-normal text-primary">
								{data.solutions.title}
							</h5>
							<p className="text-base font-normal text-gray-900">
								{data.solutions.text}
							</p>
						</div>
						<div className="flex flex-col">
							{data.solutions.itemsCollection?.items.map(
								(item: any, index: number) => (
									<Disclosure as={"div"} key={`${id}-SolutionItem-${index}`}>
										{({ open }: { open: boolean }) => (
											<React.Fragment>
												<Disclosure.Button className={"inline-flex w-full items-center border-t border-gray-900 py-2 px-4"}>
													<span
														className={`${
															open
																? ""
																: "truncate"
														} text-base font-normal text-gray-900`}>
														{item.title}
													</span>
													<ChevronDownIcon
														className={`${
															open
																? "rotate-180 transform"
																: ""
														} h-6 w-6`}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Transition enter="transition duration-100 ease-out" enterFrom="transform scale-100 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition duration-75 ease-out" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-100 opacity-0">
													<Disclosure.Panel className={"flex flex-col flex-wrap justify-center gap-y-2 px-4 pb-2"}>
														<span className="text-sm font-bold text-gray-900">
															{item.subtitle}
														</span>
														<span className="text-sm font-normal text-gray-900">
															{documentToReactComponents(
																item.text.json,
																richTextOptions,
															)}
														</span>
													</Disclosure.Panel>
												</Transition>
											</React.Fragment>
										)}
									</Disclosure>
								),
							)}
						</div>
					</React.Fragment>
				)}
			</div>
		</React.Fragment>
	);
};

export default React.memo(Solutions);
