import { gql } from '@apollo/client';

// General Contact Form
export const CONTACT_FORM = gql`
	query getContactFormContent($language: String) {
		contactForm(id: "42G0NtmamjcMg55Capubi", locale: $language) {
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

// Homepage
export const HOMEPAGE_HEADER = gql`
	query getHomepageHeaderContent($language: String) {
		header(id: "1U1rbuhNVpBRyFw1AMnGKZ", locale: $language) {
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
		title(id: "4HrZ6scTRKri1x5ewXLseq", locale: $language) {
			title
		}
	}
`;
export const HOMEPAGE_TITLE_2 = gql`
	query getHomepageTitle2Content($language: String) {
		title(id: "5J9POJCn9MEJk8rKEVwnvA", locale: $language) {
			title
		}
	}
`;
export const HOMEPAGE_TITLE_3 = gql`
	query getHomepageTitle3Content($language: String) {
		title(id: "2Mcm5EGyofRoi3YcSyd5Te", locale: $language) {
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
		partners(id: "4jVzFlrSMc4f4Uj7t2z5Io", locale: $language) {
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
`;

// About
export const ABOUTPAGE_HEADER = gql`
	query getAboutHeaderContent($language: String) {
		header(id: "6aX9Fxq9NWDCejjZi1MnN4", locale: $language) {
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
export const ABOUTPAGE_TEXT = gql`
	query getAboutTextContent($language: String) {
		text(id: "1dfJf7mf9JMcUiHtQQkHUr", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const ABOUTPAGE_TITLE = gql`
	query getAboutTitleContent($language: String) {
		title(id: "2Mcm5EGyofRoi3YcSyd5Te", locale: $language) {
			title
		}
	}
`;
export const ABOUTPAGE_PARTNERS = gql`
	query getAboutPartnersContent($language: String) {
		partners(id: "P3MbFMASXYnuJZlPSwwJL", locale: $language) {
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
