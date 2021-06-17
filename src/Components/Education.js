import { Row } from "react-bootstrap";
import Headings from "./Headings";

const Education = ({ college, course, standard }) => {
	return (
		<>
			<Row className='ml-3' style={{ marginTop: -15, marginBottom: -5 }}>
				<Headings heading={standard} />
			</Row>
			<Row className='ml-0'>
				<p style={{ fontSize: 25 }}>{college}</p>
			</Row>
			{/* <Row className='ml-0' style={{ marginTop: -15 }}>
						<p style={{ color: "#a09ca4" }}>Courses</p>
					</Row> */}
			<Row className='ml-3' style={{ marginTop: -15 }}>
				<p style={{ color: "#383c4c" }}>{course}</p>
			</Row>
		</>
	);
};

export default Education;
