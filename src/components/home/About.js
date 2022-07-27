import React from "react";
import { Row, Col } from "antd";
import { HomeFilled, DatabaseFilled } from "@ant-design/icons";
const items = [
	{
		key: "1",
		icon: <HomeFilled style={{ color: "blue", fontSize: "32px" }} />,
		title: "this is ant framework.",
		content: "Very useful framework for designers.",
	},
	{
		key: "2",
		icon: <DatabaseFilled style={{ color: "blue", fontSize: "32px" }} />,
		title: "this is ant framework.",
		content: "Very useful framework for designers.",
	},
	{
		key: "3",
		icon: <HomeFilled style={{ color: "blue", fontSize: "32px" }} />,
		title: "this is ant framework.",
		content: "Very useful framework for designers.",
	},
];
const About = () => {
	return (
		<div className="block aboutBlock" id="about">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>About Us</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
				<div className="contentHolder">
					<p>
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<Row style={{justifyContent:'center'}} gutter={[16, 16]}>
					{items.map((item) => {
						return (
							<Col
								md={{
									span: 8
									
								}}
								
								key={item.key}>
								<div>{item.icon}</div>
								<h3>{item.title}</h3>
								<p> {item.content}</p>
							</Col>
						);
					})}

					{/* <Col span={8}>Column</Col>
					<Col span={8}>Column</Col> */}
				</Row>
			</div>
		</div>
	);
};

export default About;
