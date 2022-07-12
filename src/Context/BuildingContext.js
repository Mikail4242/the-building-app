import { createContext, useState, useEffect } from "react";

export const BuildingContext = createContext();

const BuildingContextProvider = (props) => {
	const [dataList, setDataList] = useState([]);

	const getData = () => {
		fetch("mock.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((myJson) => {
				setDataList(myJson);
				// console.log(myJson);
			});
	};
	useEffect(() => {
		getData();
	}, []);

	const addUserHandler = (id, name, area, location) => {
		setDataList([...dataList, { id, name, area, location }]);
	};

	const deleteUser = (id) => {
		setDataList(dataList.filter((data) => data.id !== id));
	};

	const updateUser = (id, updatedUser) => {
		setDataList(dataList.map(data => data.id === id ? updatedUser : data))
	};

	return (
		<BuildingContext.Provider value={{ dataList, addUserHandler, deleteUser, updateUser }}>
			{props.children}
		</BuildingContext.Provider>
	);
};

export default BuildingContextProvider;
