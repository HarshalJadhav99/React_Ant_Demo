import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;
const Contact = () => {
	return (
		<div className="block contactBlock" id="contact">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Get In Touch</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}>
					<Form.Item
						name="fullname"
						rules={[
							{
								required: true,
								message: "Please input your fullname!",
							},
						]}>
						<Input placeholder="Fullname" />
					</Form.Item>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}>
						<Input type="email" placeholder="Email Address" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}>
						<Input type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item
						name="Message"
						rules={[
							{
								required: true,
								message: "Please input your message",
							},
						]}>
						<TextArea placeholder="Message" /></Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button">
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Contact;
