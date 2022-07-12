import { Container, Navbar } from "react-bootstrap";

const Welcome = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>Welcome</Navbar.Brand>
				<Navbar.Brand>
					<span className="material-symbols-rounded">account_circle</span>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Welcome;
