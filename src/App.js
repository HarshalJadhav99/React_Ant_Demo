import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";

import Demo from "./components/Demo";
import Appheader from "./components/common/Appheader";
import AppFooter from "./components/common/AppFooter";
import hero from "./components/home/Hero";
import Home from "./views/Home";

import { Layout } from "antd";

const { Header,Content,Footer } = Layout;

function App() {
	return (
		<>
			{/* <Demo/> */}

			<Layout className="mainLayout">
				<Header>
					<Appheader />
				</Header>
				<Content>
					<Home />
				</Content>
				<Footer>
					<AppFooter/>
				</Footer>
			</Layout>
		</>
	);
}

export default App;
