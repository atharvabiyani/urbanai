import React from "react";

const MessageParser = ({ children, actions }) => {
	const parse = (message) => {
		if (message.includes("hello")) {
			actions.handleHello();
		} else if (message.includes("park")) {
			actions.handlePark();
		} else if (message.includes("heat")) {
			actions.handleHottest();
		} else {
			actions.handleNotFound();
		}
	};

	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					parse: parse,
					actions: {},
				});
			})}
		</div>
	);
};

export default MessageParser;
