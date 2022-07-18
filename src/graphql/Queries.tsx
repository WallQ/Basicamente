import { gql } from "@apollo/client";

// General
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
export const PROPOSAL_FORM = gql`
	query getProposalFormContent($language: String) {
		proposalForm(id: "2X9cFiQJjhU9R2sP0Kjy0R", locale: $language) {
			title
			text
			inputText
			servicesTitle
			servicesCollection(locale: $language) {
				items {
					title
					value
				}
			}
			budgetsTitle
			budgetsCollection(locale: $language) {
				items {
					title
					value
				}
			}
			timesTitle
			timesCollection(locale: $language) {
				items {
					title
					value
				}
			}
			buttonText
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

// Services - DigitalCommerce
export const SERVICES_DIGITALCOMMERCEPAGE_HEADER = gql`
	query getServicesDigitalCommerceHeaderContent($language: String) {
		header(id: "70q6RnsNHAZPL8X8KtJA91", locale: $language) {
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
export const SERVICES_DIGITALCOMMERCEPAGE_SOLUTIONS = gql`
	query getServicesDigitalCommerceSolutionsContent($language: String) {
		solutions(id: "2rGyF9mlK8Fx9yTFP7PXlP", locale: $language) {
			title
			text
			itemsCollection {
				items {
					title
					subtitle
					text {
						json
					}
				}
			}
		}
	}
`;
export const SERVICES_DIGITALCOMMERCEPAGE_SOLUTIONS_2 = gql`
	query getServicesDigitalCommerceSolutions2Content($language: String) {
		solutions(id: "7aSQVf4DvVKtIqjLlTDz4H", locale: $language) {
			title
			text
			itemsCollection {
				items {
					title
					subtitle
					text {
						json
					}
				}
			}
		}
	}
`;
export const SERVICES_DIGITALCOMMERCEPAGE_PARTNERS = gql`
	query getServicesDigitalCommercePartnersContent($language: String) {
		partners(id: "5IphY62WjXIGuIYcocKIDF", locale: $language) {
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

// Services - MarketingDigitalPerformance
export const SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_HEADER = gql`
	query getServicesMarketingDigitalPerformanceHeaderContent(
		$language: String
	) {
		header(id: "5ModeWIXq0co0Pgz8UsTvV", locale: $language) {
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
export const SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_TITLE = gql`
	query getServicesMarketingDigitalPerformanceTitleContent(
		$language: String
	) {
		title(id: "63jisOmXRShpemU2tCj68i", locale: $language) {
			title
		}
	}
`;
export const SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_HELPITEM = gql`
	query getServicesMarketingDigitalPerformanceHelpItemContent(
		$language: String
	) {
		helpItemCollection(locale: $language) {
			items {
				title
				text
			}
		}
	}
`;
export const SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_TEXT = gql`
	query getServicesMarketingDigitalPerformanceTextContent($language: String) {
		text(id: "1cvGJXRAsXbvpUzU5LxOc5", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_PARTNERS = gql`
	query getServicesMarketingDigitalPerformancePartnersContent(
		$language: String
	) {
		partners(id: "3Iwvjhc0tfSWUG8WJAOONp", locale: $language) {
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

// Services - UiUxDesign
export const SERVICES_UIUXDESIGNPAGE_HEADER = gql`
	query getServicesUiUxDesignHeaderContent($language: String) {
		header(id: "4M147KldiO9d9KZlGOFHsC", locale: $language) {
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
export const SERVICES_UIUXDESIGNPAGE_TITLE = gql`
	query getServicesUiUxDesignTitleContent($language: String) {
		title(id: "3TMuPpO1KHcmAOOM5s671D", locale: $language) {
			title
		}
	}
`;
export const SERVICES_UIUXDESIGNPAGE_TEXT = gql`
	query getServicesUiUxDesignTextContent($language: String) {
		text(id: "6CxHGhmogiWoaH1C9f9cV9", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_UIUXDESIGNPAGE_TEXT_2 = gql`
	query getServicesUiUxDesignText2Content($language: String) {
		text(id: "S75W43IIKT0C7TqKcpZUD", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_UIUXDESIGNPAGE_TEXT_3 = gql`
	query getServicesUiUxDesignText3Content($language: String) {
		text(id: "2OHLlyMde84P1iBJT0WiJL", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_UIUXDESIGNPAGE_PARTNERS = gql`
	query getServicesUiUxDesignPartnersContent($language: String) {
		partners(id: "3MkqAKUeI0k3bhQ2LSl4gX", locale: $language) {
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

// Services - Web Development
export const SERVICES_WEBDEVELOPMENTPAGE_HEADER = gql`
	query getWebDevelopmentHeaderContent($language: String) {
		header(id: "5RbJOVa4P75kFiPqIBS3L6", locale: $language) {
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
export const SERVICES_WEBDEVELOPMENTPAGE_TEXT = gql`
	query getWebDevelopmentTextContent($language: String) {
		text(id: "50B8ULWhe1avCXbFKooMCa", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_WEBDEVELOPMENTPAGE_TEXT_2 = gql`
	query getWebDevelopmentText2Content($language: String) {
		text(id: "xdtHSw7BcW61BdVyvt7zP", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_WEBDEVELOPMENTPAGE_PARTNERS = gql`
	query getWebDevelopmentPartnersContent($language: String) {
		partners(id: "4sKhR5QkAZYBD6fTXpDOM", locale: $language) {
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

// Services - Websites Digital Workplaces
export const SERVICES_WEBSITESDIGITALWORKPLACESPAGE_HEADER = gql`
	query getWebsitesDigitalWorkplacesHeaderContent($language: String) {
		header(id: "30gEv4faUhgdJxlh0wGts5", locale: $language) {
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
export const SERVICES_WEBSITESDIGITALWORKPLACESPAGE_TEXT = gql`
	query getWebsitesDigitalWorkplacesTextContent($language: String) {
		text(id: "6AJEsdfkiziiszShEIDHSB", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_WEBSITESDIGITALWORKPLACESPAGE_TEXT_2 = gql`
	query getWebsitesDigitalWorkplacesText2Content($language: String) {
		text(id: "74Q1WSxuVVLJGgoARUzFL8", locale: $language) {
			text {
				json
			}
		}
	}
`;
export const SERVICES_WEBSITESDIGITALWORKPLACESPAGE_PARTNERS = gql`
	query getWebsitesDigitalWorkplacesPartnersContent($language: String) {
		partners(id: "4Po5FiOUvGQVm2CXcrGbyf", locale: $language) {
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

// Portfolio - Ecommerce
export const PORTFOLIO_ECOMMERCE_PORTFOLIO = gql`
	query getEcommercePortfolioContent($language: String) {
		portfolio(id: "4keqOpiVDd85fagPpaz9pe", locale: $language) {
			title
			text
			portfolioCollection {
				items {
					image {
						title
						description
						url
						sys {
							id
						}
					}
					title
					subtitle
					text {
						json
					}
					url {
						text
						url
					}
				}
			}
		}
	}
`;

// Portfolio - Marketing Digital Performance
export const PORTFOLIO_MARKETINGDIGITALPERFORMANCEPAGE_PORTFOLIO = gql`
	query getMarketingDigitalPerformancePortfolioContent($language: String) {
		portfolio(id: "QFBaKSz8nGPiJ4dukLZa7", locale: $language) {
			title
			text
			portfolioCollection {
				items {
					image {
						title
						description
						url
						sys {
							id
						}
					}
					title
					subtitle
					text {
						json
					}
					url {
						text
						url
					}
				}
			}
		}
	}
`;

// Portfolio - WebDevelopment
export const PORTFOLIO_WEBDEVELOPMENTPAGE_PORTFOLIO = gql`
	query getWebDevelopmentPortfolioContent($language: String) {
		portfolio(id: "4xmMwTDmlecJLFdzDXxLif", locale: $language) {
			title
			text
			portfolioCollection {
				items {
					image {
						title
						description
						url
						sys {
							id
						}
					}
					title
					subtitle
					text {
						json
					}
					url {
						text
						url
					}
				}
			}
		}
	}
`;

// Portfolio - Websites
export const PORTFOLIO_WEBSITESPAGE_PORTFOLIO = gql`
	query getWebsitesPortfolioContent($language: String) {
		portfolio(id: "5Y5eXhXHmRbWs8CiXVtPJI", locale: $language) {
			title
			text
			portfolioCollection {
				items {
					image {
						title
						description
						url
						sys {
							id
						}
					}
					title
					subtitle
					text {
						json
					}
					url {
						text
						url
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
			contactCollection {
				items {
					city
					address
					telephone
				}
			}
		}
	}
`;

// Terms & Conditions
export const TERMSCONDITIONSPAGE_TEXT = gql`
	query getTermsConditionsTextContent($language: String) {
		text(id: "2YPdefJVv6o54MJ2DANqTu", locale: $language) {
			text {
				json
			}
		}
	}
`;

// Dispute Resolution
export const DISPUTERESOLUTIONPAGE_TEXT = gql`
	query getDisputeResolutionTextContent($language: String) {
		text(id: "1oScufHLU3JPHPuvVZwl6Q", locale: $language) {
			text {
				json
			}
		}
	}
`;
