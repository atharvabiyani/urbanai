import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
	const handleHello = () => {
		const botMessage = createChatBotMessage("Hello. Nice to meet you!");

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handlePark = () => {
		const botMessage = createChatBotMessage(
			"The best place to build a mid-sized park is on 19th avenue and 14th street, where heat concentration is the highest."
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleHottest = () => {
		const botMessage = createChatBotMessage(
			"The area on the top left next to the lightbulbs and large structure is the hottest area."
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleNotFound = () => {
		const botMessage = createChatBotMessage(
			"Sorry, I encountered a systems issue. Please try again later."
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					actions: { handleHello, handlePark, handleNotFound, handleHottest },
				});
			})}
		</div>
	);
};

export default ActionProvider;
