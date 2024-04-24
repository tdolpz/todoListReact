import ContainerHalloContent from "./components/ContainerHallo.jsx";

function App() {
  return (
		<div className="page-wrap">
			<header>
				<h1>Do It Now Or Never</h1>
			</header>

			<main>
				<div className="container-hallo">
					<ContainerHalloContent />
					FORM <br />
					FILTER
				</div>
				TODO LIST
			</main>
		</div>
  );
}

export default App;
