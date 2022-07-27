import { Card } from "antd";
import React from "react";
import { Row, Col } from "antd";
import img1 from "../../assets/images/modern-design.jpg";
import img2 from "../../assets/images/advanced-option.jpg";
import img3 from "../../assets/images/unlimited-features.jpg";
const { Meta } = Card;
const items = [
	{
		key: "1",
		img: img1,
		title: "Morden Design",
		content: "Very useful framework for designers.",
	},
	{
		key: "2",
		img: img2,
		title: "Advanced Option",
		content: "Very useful framework for designers.",
	},
	{
		key: "3",
		img: img3,
		title: "Unlimited Features",
		content: "Very useful framework for designers.",
	},
	{
		key: "1",
		img: img1,
		title: "Morden Design",
		content: "Very useful framework for designers.",
	},
	{
		key: "2",
		img: img2,
		title: "Advanced Option",
		content: "Very useful framework for designers.",
	},
	{
		key: "3",
		img: img3,
		title: "Unlimited Features",
		content: "Very useful framework for designers.",
	},
];
const Feature = () => {
	return (
		<div className="block featureBlock bgGray" id="feature">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Key Features and Benefits</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
				<Row gutter={[16, 16]}>
					{items.map((item) => {
						return (
							<Col
							xs={{
									span: 24,
								}}
								sm={{
									span: 12,
								}}
								md={{
									span: 8,
								}}>
								<Card hoverable cover={<img alt="example" src={item.img} />}>
									<Meta title={item.title} />
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};

export default Feature;
