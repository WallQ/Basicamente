import React from 'react';
import { useQuery } from '@apollo/client';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';
import { CONTACTPAGE_CONTACT } from '../../graphql/Queries';
import { CONTACT_FORM } from '../../graphql/Queries';

// Loading Skeletons
import PageLoadingSkeleton from '../../components/PageLoading/PageLoading';
import ContactFormLoadingSkeleton from '../../components/ContactForm/ContactFormLoadingSkeleton';

// Error Boundary
import ErrorBoundary from '../../components/PageErrorBoundary/PageErrorBoundary';

const ContactForm = React.lazy(() => import('../../components/ContactForm/ContactForm'));

const Contact: React.FunctionComponent = () => {
	const id = React.useId();
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(CONTACTPAGE_CONTACT, {variables: { language }});

	if (loading) return <PageLoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.contact && (
				<React.Fragment>
					<div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
						<img src={data.contact.image.url} alt={data.contact.image.title} className="aspect-auto" width={2500} height={1920} />
						<div className="px-18 flex flex-col justify-center gap-y-8">
							<h1 className="text-4xl font-medium">
								{data.contact.title}
							</h1>
							<a className="text-sm font-light underline" href={`mailto:${data.contact.email}`}>
								{data.contact.email}
							</a>
							{data.contact.contactCollection?.items.map((contact: any, index: number) => (
								<React.Fragment key={`${id}-Contact-${index}`}>
									<div className="flex flex-col">
										<span className="text-base font-bold">
											{contact.city}
										</span>
										<span className="text-sm font-light">
											{contact.address}
										</span>
										<a className="text-sm font-light underline" href={`tel:${contact.telephone}`}>
											{contact.telephone}
										</a>
									</div>
								</React.Fragment>
							))}							
							<div className="flex flex-col">
								{data.contact.socialMediaCollection?.items.map((socialMedia: any, index: number) => (
									<React.Fragment key={`${id}-SocialMedia-${index}`}>
											<a className="text-sm font-light underline" href={socialMedia.url} target="_blank" rel="noreferrer">
												{socialMedia.title}
											</a>
									</React.Fragment>
								))}
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default Contact;
