import { Row } from "react-bootstrap";

const Heading2 = ({ title }) => {
	return (
		<>
			<Row className='ml-1'>
				<h2 style={{ color: "#383c4c", fontWeight: "bold" }}>{title}</h2>
			</Row>
			<hr
				style={{
					color: "#383c4c",
					backgroundColor: "#383c4c",
					height: 1,
					marginLeft: -10,
					textAlign: "left",
					marginTop: 0,
				}}
			/>
		</>
	);
};

export default Heading2;
