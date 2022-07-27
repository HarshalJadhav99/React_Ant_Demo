import React from "react";
import { Carousel, Col, Row } from "antd";
import { Button } from "antd";
import img1 from "../../assets/images/modern-design.jpg";
import img2 from "../../assets/images/unlimited-features.jpg";
import img3 from "../../assets/images/advanced-option.jpg";
const items = [
	{
		key: "1",
		title: "this is ant framework.",
		content: "Very useful framework for designers.",
		img: img1,
	},
	{
		key: "2",
		title: "this is ant framework.",
		content: "Very useful framework for designers.",
		img: img2,
	},
	{
		key: "3",
		title: "this is ant framework.",
		content: "Very useful framework for designers.",
		img: img3,
	},
];
const Hero = () => {
	return (
		<div className="heroblock" id="hero">
			<Carousel>
				{items.map((item) => {
					return (
						<div className="container-fluid">
							<Row>
								<Col md={{span:12}} lg={{ span: 12 }}>
									<div className="content">
										<h3>{item.title}</h3>
										<p> {item.content}</p>
										<div>
											<Button
												className="btn_primary"
												type="primary"
												size="large">
												Learn more
											</Button>
											<Button size="large">Watch a Demo</Button>
										</div>
									</div>
								</Col>
								<Col lg={{ span: 12 }}>
									<div>
										<img className="herotabimg" src={item.img} />
									</div>
								</Col>
							</Row>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Hero;
