import React, { useState } from "react";
import { Menu, Anchor, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Link } = Anchor;
const Appheader = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	return (
		<>
			<div className="container-fluid">
				<div className="header">
					<div className="logo" >
						<a href="#hero">ANT</a>
					</div>
					<div className="mobileHidden">
						<Anchor>
							<Link href="#hero" title="Home" />
							<Link href="#contact" title="Contact" />
							<Link href="#about" title="About" />
							<Link href="#feature" title="Feature" />
							<Link href="#faq" title="FAQ" />
							<Link href="#pricing" title="Pricing" />
						</Anchor>
					</div>
					<div className="mobileVisible">
						<Button
							style={{ backgroundColor: "transparent", border: "0px" }}
							onClick={showDrawer}>
							<MenuOutlined style={{ color: "white", fontSize: "24px" }} />
						</Button>
						<Drawer placement="right" onClose={onClose} visible={visible}>
							<Anchor>
								<Link className="mobileMenu" href="#hero" title="Home" />
								<Link className="mobileMenu" href="#contact" title="Contact" />
								<Link className="mobileMenu" href="#about" title="About" />
								<Link className="mobileMenu" href="#feature" title="Feature" />
								<Link className="mobileMenu" href="#faq" title="FAQ" />
							</Anchor>
						</Drawer>
					</div>
				</div>
			</div>
		</>
	);
};

export default Appheader;
