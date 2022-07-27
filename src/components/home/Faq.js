import { Button, Collapse } from "antd";
import React from "react";
const { Panel } = Collapse;

const Faq = () => {
	return (
		<div className="block faqBlock" id="faq">
			<div className="container-fluid">
            <div className="titleHolder">
                <h2>Frequently Asked Questions</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s.</p>
                        
            </div>
				<Collapse defaultActiveKey={["1"]}>
					<Panel header="How to setup the theme?" key="1">
						<p>Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.</p>
					</Panel>
					<Panel header="can i change plan or cancel at any time?" key="2">
						<p>Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.</p>
					</Panel>
					<Panel header="How to access through cloud?" key="3">
						<p>Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.</p>
					</Panel>
				</Collapse>
			</div>
		</div>
	);
};

export default Faq;
