import { Button, Form, Alert } from "react-bootstrap";

import { BuildingContext } from "../Context/BuildingContext";
import { useContext, useState, useEffect } from "react";

const UpdateForm = ({ theUpdate }) => {
	const { updateUser, dataList } = useContext(BuildingContext);

	const userId = theUpdate.id;

	const [id, setId] = useState(theUpdate.id);
	const [name, setName] = useState(theUpdate.name);
	const [area, setArea] = useState(theUpdate.area);
	const [location, setLocation] = useState(theUpdate.location);
	const [icon, setIcon] = useState(theUpdate.icon);

	function handleChange(e) {
		console.log(e.target.files);
		setIcon(URL.createObjectURL(e.target.files[0]));
	}

	const updatedUser = { id, name, area, location, icon };
	const userHandleSubmit = (e) => {
		e.preventDefault();
		if (name.trim().length < 3) {
			return;
		}
		if (+id < 1) {
			return;
		}
		const result = dataList.find((val) => val.id === +id);
		if (result) {
			return;
		}
		updateUser(userId, updatedUser);
	};
	const [show, setShow] = useState(false);
	const handleShowAlert = () => setShow(true);

	useEffect(() => {
		return () => handleShowAlert();
	}, []);

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
				<Alert
					variant="danger"
					onClose={() => setShow(false)}
					dismissible
					show={show}>
					Check your id you cannot add the same id
				</Alert>
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
				<Alert
					variant="danger"
					onClose={() => setShow(false)}
					dismissible
					show={show}>
					your name should be more than 3 chars
				</Alert>
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
			<Form.Group>
				<Form.Control
					type="file"
					placeholder="location"
					name="icon"
					onChange={(e) => handleChange(e)}
				/>
			</Form.Group>
			<Button onClick={() => setShow(true)} variant="success" type="submit">
				Update User
			</Button>
		</Form>
	);
};

export default UpdateForm;
