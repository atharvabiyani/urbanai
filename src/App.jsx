import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ChatbotComponent from "./chatbot/ChatbotComponent.jsx";
// import image2 from "./assets/image2.jpeg";
import video from "./assets/ircam.mp4";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="app-container">
			<div className="image-container">
				<video src={video} alt="image" className="ir-image" controls={true} />
				<h2 className="quick-insights-title">Quick Insights:</h2>
				<div className="stats-container">
					<div className="stats-column">
						<p>
							<span className="stats-value">• 3 hot spots detected</span>
						</p>
						<p>• 30 square miles covered</p>
						<p>• Average hotspot temperature: 98 degrees</p>
						<p>• Average coolspot temperature: 87</p>
					</div>
					<div className="stats-column">
						<p>• Peak temperature: 101 degrees</p>
						<p>• Lowest temperature: 82 degrees</p>
						<p>• % hotspot: 30%</p>
						<p>• % coolspot: 70%</p>
					</div>
				</div>
			</div>
			<div className="chatbot-container">
				<div className="title-container">
					<h1 className="chatbot-title">Urban.AI</h1>
				</div>

				<ChatbotComponent />
			</div>
		</div>
	);
};

export default App;
