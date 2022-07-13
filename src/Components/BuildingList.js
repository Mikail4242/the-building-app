import { useContext, useEffect, useState } from "react";
import { BuildingContext } from "../Context/BuildingContext";
import { Fragment } from "react";
import Building from "./Building";
import { Modal, Button, Table } from "react-bootstrap";
import AddForm from "./AddForm";

const BuildingList = () => {
	const { dataList } = useContext(BuildingContext);

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		handleClose();
	}, [dataList]);

	return (
		<Fragment>
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>
							<b>Buildings</b>
						</h2>
					</div>
					<div className="col-sm-6">
						<Button
							onClick={handleShow}
							className="btn btn-light"
							data-toggle="modal">
							<i className="material-icons text-dark">&#xE147;</i>{" "}
							<span className="text-dark">Add User</span>
						</Button>
					</div>
				</div>
			</div>

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Area</th>
						<th>Location</th>
						<th>Images</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{dataList &&
						dataList.map((data) => {
							return (
								<tr key={data.id}>
									<Building data={data} />
								</tr>
							);
						})}
				</tbody>
			</Table>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddForm />
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

export default BuildingList;
