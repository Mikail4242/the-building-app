import { Button, Form } from "react-bootstrap";

import { BuildingContext } from "../Context/BuildingContext";
import { useContext, useState } from "react";

const UpdateForm = ({ theUpdate }) => {
	const userId = theUpdate.id;

	const [id, setId] = useState(theUpdate.id);
	const [name, setName] = useState(theUpdate.name);
	const [area, setArea] = useState(theUpdate.area);
	const [location, setLocation] = useState(theUpdate.location);

	const { updateUser } = useContext(BuildingContext);

	const updatedUser = { id, name, area, location };

	const userHandleSubmit = (e) => {
		e.preventDefault();
		if (
			name.trim().length < 3 ||
			location.trim().length < 3
		) {
			return;
		}
		if (+id < 1) {
			return;
		}
		if (+area < 1) {
			return;
		}
		updateUser(userId, updatedUser);
	};

	return (
		<Form onSubmit={userHandleSubmit}>
			<Form.Group>
				<Form.Control
					type="number"
					placeholder="id *"
					name="id"
					required
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="name *"
					name="name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="number"
					placeholder="area"
					rows={3}
					name="area"
					value={area}
					required
					onChange={(e) => setArea(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="location"
					name="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
			</Form.Group>
			<Button variant="success" type="submit">
				Update User
			</Button>
		</Form>
	);
};

export default UpdateForm;
