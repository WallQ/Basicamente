import { gql } from '@apollo/client';

export const HOMEPAGE_CONTENT = gql`
	query getHomepageContent {
		homepageHeaderCollection {
			items {
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

export const TEST = gql`
	query TestQuery {
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
