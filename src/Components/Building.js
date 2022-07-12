import { Fragment, useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { BuildingContext } from "../Context/BuildingContext";
import UpdateForm from "./UpdateForm";

const Building = ({ data }) => {
	const { deleteUser } = useContext(BuildingContext);

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		handleClose();
	}, [data]);

	return (
		<Fragment>
			<td>{data.id}</td>
			<td>{data.name}</td>
			<td>{data.area}</td>
			<td>{data.location}</td>
			<td>
				<button
					onClick={handleShow}
					className="btn text-light btn-act"
					data-toggle="modal">
					<i className="material-icons" data-toggle="tooltip" title="Update">
						&#xE254;
					</i>
				</button>
				<button
					onClick={() => deleteUser(data.id)}
					className="btn text-warning btn-act"
					data-toggle="modal">
					<i className="material-icons" data-toggle="tooltip" title="Delete">
						&#xE872;
					</i>
				</button>
			</td>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<UpdateForm theUpdate={data} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

export default Building;
