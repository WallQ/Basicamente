import React from "react";
import { useQuery } from "@apollo/client";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";
import { CONTACTPAGE_CONTACT } from "../../graphql/Queries";
import { CONTACT_FORM } from "../../graphql/Queries";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Loading Skeletons
import PageLoadingSkeleton from "../../components/PageLoading/PageLoading";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Error Boundary
import ErrorBoundary from "../../components/PageErrorBoundary/PageErrorBoundary";

const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const Contact: React.FunctionComponent = () => {
	const id = React.useId();
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(CONTACTPAGE_CONTACT, { variables: { language } });

	if (loading) return <PageLoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.contact && (
				<React.Fragment>
					<div className="container mx-auto grid grid-cols-1 gap-y-8 gap-x-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
						<div className="col-span-2">
							<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
								<ContactForm query={CONTACT_FORM} />
							</React.Suspense>
						</div>
						<div className="flex flex-col justify-center gap-y-8">
							<h1 className="text-4xl font-medium text-primary">
								{data.contact.title}
							</h1>
							<a className="text-sm font-light underline" href={`mailto:${data.contact.email}`}>
								{data.contact.email}
							</a>
							{data.contact.contactCollection?.items.map(
								(contact: any, index: number) => (
									<React.Fragment key={`${id}-Contact-${index}`}>
										<div className="flex flex-col">
											<h6 className="text-base font-medium text-gray-900">
												{contact.city}
											</h6>
											<span className="text-sm font-light">
												{contact.address}
											</span>
											<a className="text-sm font-light underline" href={`tel:${contact.telephone}`}>
												{contact.telephone}
											</a>
										</div>
									</React.Fragment>
								),
							)}
							<div className="flex flex-row justify-start gap-x-2 lg:justify-start">
								<a href="https://www.instagram.com/basicamente.digital/" target="_blank" rel="noreferrer" className="group rounded-full border-2 border-primary p-1.5 text-primary hover:opacity-80">
									<span className="sr-only">Instagram</span>
									<FaInstagram className="text-primary" />
								</a>
								<a href="https://www.facebook.com/basicamentedigital/" target="_blank" rel="noreferrer" className="group rounded-full border-2 border-primary p-1.5 text-primary hover:opacity-80">
									<span className="sr-only">Facebook</span>
									<FaFacebookF className="text-primary" />
								</a>
								<a href="https://pt.linkedin.com/company/basicamente/" target="_blank" rel="noreferrer" className="group rounded-full border-2 border-primary p-1.5 text-primary hover:opacity-80">
									<span className="sr-only">LinkedIn</span>
									<FaLinkedinIn className="text-primary" />
								</a>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Contact;
