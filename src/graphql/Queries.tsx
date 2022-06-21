import { gql } from '@apollo/client';

// Homepage
export const HOMEPAGE_HEADER_PT = gql`
	query getHomepageHeaderContent {
		homepageHeader(id: "2DDrCQlZSMvizPZT4b6UdM", locale: "pt") {
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
export const HOMEPAGE_HEADER_EN = gql`
	query getHomepageHeaderContent {
		homepageHeader(id: "2DDrCQlZSMvizPZT4b6UdM", locale: "en-US") {
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
export const HOMEPAGE_SERVICES_PT = gql`
	query getHomepageServicesContent {
		homepageServicesCollection(locale: "pt") {
			items {
				title
				question
				text
				urlText
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
export const HOMEPAGE_SERVICES_EN = gql`
	query getHomepageServicesContent {
		homepageServicesCollection(locale: "en-US") {
			items {
				title
				question
				text
				urlText
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
export const HOMEPAGE_PROJECTS_PT = gql`
	query getHomepageProjectsContent {
		homepageProjectsCollection(locale: "pt") {
			items {
				title
				text
				urlText
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
export const HOMEPAGE_PROJECTS_EN = gql`
	query getHomepageProjectsContent {
		homepageProjectsCollection(locale: "en-US") {
			items {
				title
				text
				urlText
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
export const HOMEPAGE_PARTNERS_PT = gql`
	query getHomepagePartnersContent {
		homepagePartnersCollection(locale: "pt") {
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
export const HOMEPAGE_PARTNERS_EN = gql`
	query getHomepagePartnersContent {
		homepagePartnersCollection(locale: "en-US") {
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
export const HOMEPAGE_CONTACT_PT = gql`
	query getHomepageHeaderContent {
		homepageContact(id: "6r8OfBhsDtlRWQpWRHlKSP", locale: "pt") {
			title
			text
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
export const HOMEPAGE_CONTACT_EN = gql`
	query getHomepageHeaderContent {
		homepageContact(id: "6r8OfBhsDtlRWQpWRHlKSP", locale: "en-US") {
			title
			text
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
