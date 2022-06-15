import { gql } from '@apollo/client';

// Homepage
export const HOMEPAGE_HEADER = gql`
	query getHomepageHeaderContent {
		homepageHeader(id: "2DDrCQlZSMvizPZT4b6UdM") {
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
export const HOMEPAGE_SERVICES = gql`
	query getHomepageServicesContent {
		homepageServicesCollection {
			items {
				title
				question
				text
				url
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
	}
`;
export const HOMEPAGE_PROJECTS = gql`
	query getHomepageProjectsContent {
		homepageProjectsCollection {
			items {
				title
				text
				url
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
	}
`;
export const HOMEPAGE_PARTNERS = gql`
	query getHomepagePartnersContent {
		homepagePartnersCollection {
			items {
				title
				imagesCollection {
					items {
						title
						description
						url
						sys {
							id
						}
					}
				}
			}
		}
	}
`;
