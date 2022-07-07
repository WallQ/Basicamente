import React from "react";

const richTextOptions = {
	renderMark: {
		"bold": (text: any) => <span className="font-bold">{text}</span>,
		"italic": (text: any) => <span className="italic">{text}</span>,
		"underline": (text: any) => <span className="underline">{text}</span>,
	},
	renderNode: {
		"paragraph": (node: any, children: any) => <React.Fragment><p>{children}</p><br/></React.Fragment>,
		"heading-1": (node: any, children: any) => <h1 className="text-6xl font-medium">{children}</h1>,
		"heading-2": (node: any, children: any) => <h2 className="text-5xl font-medium">{children}</h2>,
		"heading-3": (node: any, children: any) => <h3 className="text-4xl font-medium">{children}</h3>,
		"heading-4": (node: any, children: any) => <h4 className="text-3xl font-medium">{children}</h4>,
		"heading-5": (node: any, children: any) => <h5 className="text-2xl font-medium">{children}</h5>,
		"heading-6": (node: any, children: any) => <h6 className="text-xl font-medium">{children}</h6>,
	},
};

export default richTextOptions;
