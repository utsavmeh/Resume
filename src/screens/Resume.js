import { Col, Image, Row } from "react-bootstrap";
import { AiFillMail } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import ColoredLine from "../Components/ColoredLine";
import Headings from "../Components/Headings";
import Education from "../Components/Education";
import Heading2 from "../Components/Heading2";

const Resume = () => {
	const skills = [
		"html5",
		"css3/bootstrap5",
		"Java Script",
		"GitHub",
		"Cyber Security",
		"C++",
		"My SQL",
		"Mongo DB",
		"Competitive Programming",
		"python",
		"c",
		"oops",
		"speaker",
		"Writing Skills",
		"leadership quality",
		"good management skills",
		"Stock market analysis",
	];
	const interests = [
		"Web Development",
		"Learn about new technologies",
		"MERN stack",
		"team building",
		"ﬁxing cyber bugs",
		"cybersecurity",
		"Crypto Currency",
		"Share Market",
		"Shares Analysis",
	];
	return (
		<>
			<Row className='mr-2'>
				<Col
					xs={1}
					lg={2}
					sm={2}
					className='ml-5 mt-5 ml-5'
					style={{ wordBreak: "break-all" }}>
					<Row>
						<Image src='/image.png' fluid></Image>
					</Row>
					<Row className='mt-4'>
						<AiFillMail />
					</Row>
					<Row>utsav23mehrotra@gmail.com</Row>
					<Row className='mt-4 '>
						<FaMobileAlt />
					</Row>
					<Row>7068712602</Row>
					<Row className='mt-4 '>
						<ImLocation />
					</Row>
					<Row>Ghaziabad, India</Row>
					<Headings heading='SKILLS' />
					<ColoredLine color='#383c4c' />
					<Row>
						{skills.map((res) => (
							<span
								style={{
									color: "white",
									backgroundColor: "#a09ca4",
									borderRadius: 7,
								}}
								className='p-2 m-2'>
								<span>{res}</span>
							</span>
						))}
					</Row>
					<Headings heading='LANGUAGES' />
					<ColoredLine color='#383c4c' />
					<Row>
						<p style={{ color: "#383c4c", fontWeight: "bold" }}>Hindi</p>
					</Row>
					<Row>
						<p
							style={{
								color: "#a09ca4",
								fontWeight: "italics",
								marginTop: -15,
							}}>
							full professional proficiency
						</p>
					</Row>
					<Row>
						<p style={{ color: "#383c4c", fontWeight: "bold" }}>ENGLISH</p>
					</Row>
					<Row>
						<p
							style={{
								color: "#a09ca4",
								fontWeight: "italics",
								marginTop: -15,
							}}>
							full professional proficiency
						</p>
					</Row>
					<Headings heading='INTERESTS' />
					<ColoredLine color='#383c4c' />
					<Row>
						{interests.map((res) => (
							<div
								style={{
									borderColor: "#a09ca4",
									borderRadius: 7,
									borderStyle: "solid",
								}}
								className='ml-3 mt-2 pl-2 pr-2'>
								<p>{res}</p>
							</div>
						))}
					</Row>
				</Col>
				<Col
					xs={2}
					sm={8}
					lg={8}
					className='mt-5 ml-5'
					style={{
						backgroundColor: "#383c4c",
						wordBreak: "break-all",
						maxHeight: 200,
					}}>
					<Row className='ml-2 mt-3' style={{ color: "white" }}>
						<h1> Utsav Mehrotra</h1>
					</Row>
					<Row style={{ color: "white" }} className='ml-2'>
						<h4>Student</h4>
					</Row>
					<ColoredLine className='mr-5' color='white' />
					<Row style={{ color: "white" }} className='ml-2 mt-3 mb-5'>
						<p>
							A person with positive mindset who will try to develop his skills
							and to give beneﬁt to your company with the same pace.
						</p>
					</Row>
					<Heading2 title='EDUCATION' />
					<Education
						course='Computer Engineering Information Technology'
						college='ABES Engineering college'
						standard='College'
					/>
					<Education
						course='Shahjahanpur 73%'
						college='Shri Shankar Mumukshu Vidyapeeth'
						standard='12th standard'
					/>
					<Education
						course='Shahjahanpur 8.6CGPA'
						college='Shri Shankar Mumukshu Vidyapeeth'
						standard='10th standard'
					/>
					<Heading2 title='INTERNSHIPS AND TRAINING' />
					<Education
						course=''
						college='Abhigyan'
						standard='Cybersecurity internship'
					/>
					<Education
						course='worked as a trainee in cybersecurity. The training was provided by Dataritz technology under guidance of Mr. Krishnveer singh'
						college='Dataritz Technology'
						standard='Trainee'
					/>
					<Heading2 title='CERTIFICATES' />
					<p style={{ color: "#383c4c" }}>Certiﬁcate of Internship in Python</p>
					<p style={{ color: "#383c4c" }}>
						PCAP: Programming Essentials in python
					</p>
					<p style={{ color: "#383c4c" }}>Cybersecurity Essentials</p>
					<p style={{ color: "#383c4c" }}>Introduction to Cybersecurity</p>
					<p style={{ color: "#383c4c" }}>
						Developing Soft Skills and Personality
					</p>
					<Heading2 title='PERSONAL PROJECTS' />
					<Education
						course='This website is developed using MERN where i implement login functionality, Adding notes (only admin can do that),
Search bar where you can search any subject, Pagination (when number of subject reaches more than 12 then it will be
displayed on another page), Email veriﬁcation (User needs to verify their email before logging in), Switch Theme (switch
from dark mode to light mode and vice versa)
You can have a look to the website at https://collegehaunt.herokuapp.com'
						college='Websites which can provides college and school notes to anyone for free'
						standard=''
					/>
					<Education
						course='Explored top 10 vulnerability of OWASP'
						college='Cyber Security project'
						standard=''
					/>
					<Heading2 title='ACHIEVEMENTS' />
					<div style={{ color: "#383c4c" }}>
						<h5>Successfully ﬁnd vulnerability in abhigyan</h5>
						<h5>4 star in python in hackerrank</h5>
						<h5>Technical team member in enigma programming club</h5>
						<h5>Got world rank under 3000 in tryhackme platform</h5>
						<h5>Co-Curricular Activities</h5>
						<p>Volunteered in Tech-Fest in Enigma Programming Club</p>
						<h5>Works in NGO name HUHC(Help Us to Help the Child)</h5>
						<p>
							This NGO will go to rural areas everyday and provide tutions to
							everyone for free
						</p>
					</div>
				</Col>
			</Row>
		</>
	);
};
export default Resume;
