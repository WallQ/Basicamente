import { createClient } from 'contentful';

const useContentful = (query: string) => {
	const client = createClient({
		space: process.env.REACT_APP_SPACE_ID!,
		accessToken: process.env.REACT_APP_ACCESS_TOKEN!,
	});

	const getHomepageHeader = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'homepageHeader',
				select: 'fields',
			});

            const sanitizedEntries = entries.items.map((item: any) => {
                const text = item.fields.text.content[0].content.map((content: any) => {
                    return content;
                });
                return {
                    ...(item.fields as any),
                    text
                };
            })

			return sanitizedEntries;
		} catch (error) {
			console.error(`Error fetching Homepage Header: ${error}`);
		}
	};

	return { getHomepageHeader };
};

export default useContentful;
