import { Button, Form } from "react-bootstrap";
import { BuildingContext } from "../Context/BuildingContext";
import { useContext, useState } from "react";

const AddForm = () =>{

    const {addUserHandler} = useContext(BuildingContext);

    const [newUser, setNewUser] = useState({
        id:"", name:"", area:"", location:""
    });

    const onInputChange = (e) => {
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }

    const {id, name, area, location} = newUser;

    const handleSubmit = (e) => {
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
        addUserHandler(id, name, area, location);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="id *"
                    name="id"
                    value={id}
                    onChange = { (e) => onInputChange(e)}
					required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="area"
                    rows={3}
                    name="area"
                    value={area}
                    onChange = { (e) => onInputChange(e)}
					required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="location"
                    name="location"
                    value={location}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Add User
            </Button>
        </Form>

     )
}

export default AddForm;
