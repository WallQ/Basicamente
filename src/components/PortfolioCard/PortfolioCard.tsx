import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";
import richTextOptions from "../../utils/richTextOptions";

import LoadingSkeleton from "./PortfolioCardLoadingSkeleton";
import ErrorBoundary from "./PortfolioCardErrorBoundary";

interface Props {
	query: DocumentNode;
}

const PortfolioCard: React.FunctionComponent<Props> = ({ query }) => {
	const id = React.useId();
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language } });

	if (loading) return <LoadingSkeleton quantity={4} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.portfolio && (
				<React.Fragment>
					<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
						<div className="flex flex-col items-center justify-center gap-y-4">
							<h5 className="text-2xl font-medium text-primary">
								{data.portfolio.title}
							</h5>
							<p className="text-base font-normal text-gray-900">
								{data.portfolio.text}
							</p>
						</div>
					</div>
					{data.portfolio.portfolioCollection?.items.map(
						(project: any, index: number) => (
							<React.Fragment key={`${id}-PortfolioProject-${index}`}>
								<div className={`${index === 0 ? "bg-primary" : ""}`}>
									<div className="container mx-auto px-4 sm:px-6 lg:px-8">
										<div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-2 items-center">
											<img
												key={project.image.sys.id}
												className="aspect-auto"
												src={project.image.url}
												alt={project.image.title}
												loading="lazy"
												width={450}
												height={300}
											/>
											<div className="flex flex-col flex-wrap justify-center gap-y-4">
												<h5 className={`${index === 0 ? "text-white" : "text-primary" } text-2xl font-bold`}>
													{project.title}
												</h5>
												<h6 className={`${index === 0 ? "text-white" : "text-primary"} text-xl font-medium`}>
													{project.subtitle}
												</h6>
												<div className={`${index === 0 ? "text-white" : "text-gray-900"} text-base font-normal`}>
													{documentToReactComponents(
														project.text.json,
														richTextOptions,
													)}
												</div>
												{project.url && (
													<a className={`${index === 0 ? "text-white" : "text-primary"} underline`} href={project.url.url} rel="noreferrer" target="_blank">
														{project.url.text}
													</a>
												)}
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						),
					)}
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default React.memo(PortfolioCard);
