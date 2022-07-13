import { Button, Form, Alert } from "react-bootstrap";
import { BuildingContext } from "../Context/BuildingContext";
import { useContext, useState, useEffect } from "react";

const AddForm = () => {
	const { addUserHandler, dataList } = useContext(BuildingContext);

	const [newUser, setNewUser] = useState({
		id: "",
		name: "",
		area: "",
		location: "",
		icon: "",
	});

	function handleChange(e) {
		console.log(e.target.files);
		setNewUser((prev) => {
			return { ...prev, icon: URL.createObjectURL(e.target.files[0]) };
		});
	}

	const onInputChange = (e, field) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const { id, name, area, location, icon } = newUser;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim().length < 3) {
			return;
		}
		if (+id < 1) {
			return;
		}
		if (+area < 1) {
			return;
		}
		const duplicated = dataList.find((val) => val.id === +id);
		if (duplicated) {
			return;
		}
		addUserHandler(id, name, area, location, icon);
	};
	
	const [show, setShow] = useState(false);
	const handleShowAlert = () => setShow(true);

	useEffect(() => {
		return () => handleShowAlert();
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control
					type="number"
					placeholder="id *"
					name="id"
					value={id}
					onChange={(e) => onInputChange(e)}
					required
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
					value={name}
					onChange={(e) => onInputChange(e)}
					required
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
					onChange={(e) => onInputChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="location"
					name="location"
					value={location}
					onChange={(e) => onInputChange(e)}
				/>
			</Form.Group>
			<Form.Group>
				<div className="App">
					<h4>Add Image:</h4>
					<input type="file" name="icon" onChange={(e) => handleChange(e)} />
				</div>
			</Form.Group>
			<Button onClick={() => setShow(true)} variant="success" type="submit">
				Add User
			</Button>
			
		</Form>
	);
};

export default AddForm;
