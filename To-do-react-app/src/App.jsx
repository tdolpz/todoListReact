import ContainerHallo from "./components/ContainerHallo.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
		<div className="page-wrap">
			<header>
				<h1>Do It Now Or Never</h1>
			</header>
			<main>
				<ContainerHallo />
				<TodoList/>
			</main>
		</div>
  );
}

export default App;
