import React from "react";
import { ArrowUpOutlined, FacebookFilled,LinkedinFilled ,TwitterSquareFilled,YoutubeFilled } from "@ant-design/icons"; 
import { Typography, Col, Row, BackTop } from "antd";
const { Title } = Typography;
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'rgb(10, 2, 60)',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
const AppFooter = () => {
	return (
		<div className="container-fluid">
			<div className="footer">
				<div className="logo">
					<Row>
						<Col style={{ color: "white" }} xs={{ span: 24 }} lg={{ span: 6 }}>
							<Typography>
								<Title style={{ color: "white" }}>ANTD</Title>
							</Typography>
						</Col>
						<Col style={{ color: "white" }} xs={{ span: 24 }} md={{span:12}} lg={{ span: 6 }}>
							<ul className="footer-ul">
								<li>
									<a href="" target="_blanck">
										About US
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										Contact US
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										Services
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										Portfolio
									</a>
								</li>
							</ul>
						</Col>
						<Col style={{ color: "white" }} xs={{ span: 24 }} md={{span:12}} lg={{ span: 6 }}>
            <ul className="footer-ul">
								<li>
									<a href="" target="_blanck">
										Work
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										Feature Projects
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										Business
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										Map
									</a>
								</li>
							</ul>
						</Col>
						<Col style={{ color: "white" }} xs={{ span: 12 }} lg={{ span: 6 }}>
            <ul className="footer-ul ficon">
								<li>
									<a href="" target="_blanck">
                  <FacebookFilled />
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
                  <LinkedinFilled />
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
                  <YoutubeFilled/>
									</a>
								</li>
								<li>
									<a href="" target="_blanck">
										<TwitterSquareFilled/>
									</a>
								</li>
							</ul>
						</Col>
					</Row>
          <BackTop>
      <div style={style}><ArrowUpOutlined/></div>
    </BackTop>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
