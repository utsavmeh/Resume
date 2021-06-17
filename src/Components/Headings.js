import { Row } from "react-bootstrap";

const Headings = ({ heading }) => {
	return (
		<Row>
			<h4 style={{ color: "#383c4c", fontWeight: "bold" }} className='mt-3'>
				{heading}
			</h4>
		</Row>
	);
};

export default Headings;
