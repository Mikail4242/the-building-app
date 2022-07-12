import { Navbar, Container } from "react-bootstrap";
const MainHeader = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/BuildingPage">HomePage</Navbar.Brand>
				<Navbar.Brand href="/TablePage">The Building App</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default MainHeader;
