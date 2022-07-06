import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

import LoadingSkeleton from './ProjectsCardLoadingSkeleton';
import ErrorBoundary from './ProjectsCardErrorBoundary';

interface Props {
	query: DocumentNode;
}

const ProjectsCard: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, {variables: { language }});

	if (loading) return <LoadingSkeleton quantity={3} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 py-12 md:grid-cols-3 lg:grid-cols-3">
				{data && data.homepageProjectsCollection?.items.map((project: any) => (
					<React.Fragment key={project.image.sys.id}>
						<div className="flex flex-col">
							<img src={project.image.url} alt={project.image.title} loading="lazy" width={1476} height={996} />
							<p className="mt-4 text-sm font-bold text-gray-900">{project.title}</p>
							<p className="mt-4 text-sm font-normal text-gray-900">{project.text}</p>
							<a className="mt-4" href={project.url}>
								<span className="border-b border-b-primary text-sm font-normal text-primary hover:opacity-80">
									{project.urlText}
								</span>
							</a>
						</div>
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};

export default ProjectsCard;
