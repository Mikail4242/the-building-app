import BuildingList from "./Components/BuildingList";
import BuildingContextProvider from "./Context/BuildingContext";
import { Route } from "react-router-dom";
import BuildingPage from "./Pages/BuildingPage";
import TablePage from "./Pages/TablePage";
import MainHeader from "./Components/MainHeader";

function App() {
	return (
		<div>
			<main className="text-center">
				<Route path="/TablePage">
					<TablePage />
					<div className="container-xl">
						<div className="table-responsive">
							<div className="table-wrapper">
								<BuildingContextProvider>
									<BuildingList />
								</BuildingContextProvider>
							</div>
						</div>
					</div>
				</Route>
				<Route path="/BuildingPage">
					<BuildingPage />
				</Route>
			</main>
			<MainHeader />
		</div>
	);
}

export default App;
