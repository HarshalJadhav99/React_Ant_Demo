import React from "react";
import {
	Button,
	Input,
	Select,
	Form,
	Table,
	message,
	Alert,
	DatePicker,
	TimePicker,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const Demo = () => {
	const fruits = ["Banana", "Mango", "Orange", "Cherry"];
	const [showAlert, setShowAlert] = useState(false);
	const onFinish = (e) => {
		console.log(e);
		setTimeout(() => {
			setShowAlert(true);
			// message.success("Login success")
		}, 2000);
	};
	const data = [
		{
			name: "Name 1",
			age: 10,
			address: "Address 1",
			key: "1",
		},
		{
			name: "Name 2",
			age: 20,
			address: "Address 2",
			key: "2",
		},
		{
			name: "Name 3",
			age: 30,
			address: "Address 3",
			key: "3",
		},
	];
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "key",
			render: (name) => {
				return <a>{name}</a>;
			},
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "key",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "key",
		},
		{
			title: "Graduated?",
			key: "key",
			render: (payload) => {
				return <p>{payload.age > 20 ? "True" : "False"}</p>;
			},
		},
	];
	return (
		<>
			
				{showAlert && (
					<Alert
						type="error"
						message="Error"
						description="ther was an error on login."
						closable
					/>
				)}
				<Input.Search
					placeholder="Name"
					maxLength={10}
					prefix={<UserOutlined />}
					allowClear></Input.Search>
				<Button type="primary">My 1st Button</Button>
				<p>which is your favorite fruit?</p>
				<Select placeholder="Select fruit" style={{ width: "50%" }}>
					{fruits.map((fruit, index) => {
						return (
							<Select.Option key={index} value={fruit}>
								{fruit}
							</Select.Option>
						);
					})}
				</Select>
				<p>which are your favorite fruits?</p>
				<Select
					mode="multiple"
					maxTagCount={2}
					allowClear
					placeholder="Select fruit"
					style={{ width: "50%" }}>
					{fruits.map((fruit, index) => {
						return (
							<Select.Option key={index} value={fruit}>
								{fruit}
							</Select.Option>
						);
					})}
				</Select>
				<Form onFinish={onFinish}>
					<Form.Item label="User Name" name="username">
						<Input placeholder="User name" required></Input>
					</Form.Item>
					<Form.Item label="Password" name="password">
						<Input.Password placeholder="Password" required></Input.Password>
					</Form.Item>
					<Form.Item>
						<Button block type="primary" htmlType="submit">
							Log In
						</Button>
					</Form.Item>
				</Form>
				<Table dataSource={data} columns={columns}></Table>
				<DatePicker />
				<DatePicker picker="month" />
				<DatePicker.RangePicker />
				<TimePicker />
			
		</>
	);
};

export default Demo;
