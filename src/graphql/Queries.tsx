import { gql } from '@apollo/client';

// Homepage
export const HOMEPAGE_HEADER = gql`
	query getHomepageHeaderContent($language: String) {
		homepageHeader(id: "2DDrCQlZSMvizPZT4b6UdM", locale: $language) {
			title
			text {
				json
			}
			image {
				title
				description
				url
				sys {
					id
				}
			}
		}
	}
`;
export const HOMEPAGE_TITLE = gql`
	query getHomepageTitleContent($language: String) {
		homepageTitle(id: "5wazryATP6lIZLyrdazoIc", locale: $language) {
			title
		}
	}
`;
export const HOMEPAGE_TITLE_2 = gql`
	query getHomepageTitleContent($language: String) {
		homepageTitle(id: "1MWeYqrRD8PmxHEM8v7cZd", locale: $language) {
			title
		}
	}
`;
export const HOMEPAGE_TITLE_3 = gql`
	query getHomepageTitleContent($language: String) {
		homepageTitle(id: "1dpkqrtVmqdQrjCMkFw9ma", locale: $language) {
			title
		}
	}
`;
export const HOMEPAGE_SERVICES = gql`
	query getHomepageServicesContent($language: String) {
		homepageServicesCollection(locale: $language) {
			items {
				title
				question
				text
				url {
					urlText
					url
				}
				image {
					title
					description
					url(transform: { width: 400, height: 400 })
					sys {
						id
					}
				}
			}
		}
	}
`;
export const HOMEPAGE_PROJECTS = gql`
	query getHomepageProjectsContent($language: String) {
		homepageProjectsCollection(locale: $language) {
			items {
				title
				text
				urlText
				url
				image {
					title
					description
					url(transform: { width: 500, height: 500 })
					sys {
						id
					}
				}
			}
		}
	}
`;
export const HOMEPAGE_PARTNERS = gql`
	query getHomepagePartnersContent($language: String) {
		homepagePartnersCollection(locale: $language) {
			items {
				title
				imagesCollection {
					items {
						title
						description
						url(transform: { width: 500, height: 300 })
						sys {
							id
						}
					}
				}
			}
		}
	}
`;
export const HOMEPAGE_CONTACT = gql`
	query getHomepageHeaderContent($language: String) {
		homepageContact(id: "6r8OfBhsDtlRWQpWRHlKSP", locale: $language) {
			title
			text
			inputText
			buttonText
			image {
				title
				description
				url
				sys {
					id
				}
			}
		}
	}
`;

// Contact
export const CONTACTPAGE_CONTACT = gql`
	query getContactContactContent($language: String) {
		contact(id: "3yGzhij6Gwpa7o9DSVE2II", locale: $language) {
			title
			email
			socialMediaCollection {
				items {
					title
					url
				}
			}
			contactCollection {
				items {
					city
					address
					telephone
				}
			}
			image {
				title
				description
				url(transform: { width: 750, height: 600 })
				sys {
					id
				}
			}
		}
	}
`;
