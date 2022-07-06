const richTextOptions = {
	renderMark: {
		bold: (text: any) => <span className="font-bold">{text}</span>,
		paragraph: (text: any) => <p>{text}</p>,
		italic: (text: any) => <span className="italic">{text}</span>,
	},
};

export default richTextOptions;
