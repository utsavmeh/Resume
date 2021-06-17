const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 1,
			marginLeft: -10,
			textAlign: "left",
			maxWidth: 300,
		}}
	/>
);

export default ColoredLine;
