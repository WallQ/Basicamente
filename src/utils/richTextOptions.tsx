import React from "react";

const richTextOptions = {
	renderMark: {
		bold: (text: React.ReactNode) => (
			<span className="font-bold">{text}</span>
		),
		italic: (text: React.ReactNode) => (
			<span className="italic">{text}</span>
		),
		underline: (text: React.ReactNode) => (
			<span className="underline">{text}</span>
		),
	},
	renderNode: {
		document: (node: any, children: React.ReactNode) => children,
		paragraph: (node: any, children: React.ReactNode) => <p>{children}</p>,
		"heading-1": (node: any, children: React.ReactNode) => (
			<h1 className="text-6xl font-medium">{children}</h1>
		),
		"heading-2": (node: any, children: React.ReactNode) => (
			<h2 className="text-5xl font-medium">{children}</h2>
		),
		"heading-3": (node: any, children: React.ReactNode) => (
			<h3 className="text-4xl font-medium">{children}</h3>
		),
		"heading-4": (node: any, children: React.ReactNode) => (
			<h4 className="text-3xl font-medium">{children}</h4>
		),
		"heading-5": (node: any, children: React.ReactNode) => (
			<h5 className="text-2xl font-medium">{children}</h5>
		),
		"heading-6": (node: any, children: React.ReactNode) => (
			<h6 className="text-xl font-medium">{children}</h6>
		),
		"unordered-list": (node: any, children: React.ReactNode) => (
			<ul className="list-inside list-disc">{children}</ul>
		),
		"ordered-list": (node: any, children: React.ReactNode) => (
			<ol className="list-inside list-decimal">{children}</ol>
		),
		"list-item": (node: any, children: React.ReactNode) => (
			<li>{children}</li>
		),
		blockquote: (node: any, children: React.ReactNode) => (
			<blockquote>{children}</blockquote>
		),
		hr: () => <hr />,
	},
	renderText: (text: any) => {
		return text
			.split("\n")
			.reduce((children: any, textSegment: any, index: number) => {
				return [
					...children,
					index > 0 && <br key={index} />,
					textSegment,
				];
			}, []);
	},
};

export default richTextOptions;
