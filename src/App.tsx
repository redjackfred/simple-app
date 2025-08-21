import "./App.css";

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" />
			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" />
			<label htmlFor="college-level">BS</label>
			<input type="radio" id="college-level" name="education" value="BS" />
			<label htmlFor="college-level">MS</label>
			<input type="radio" id="college-level" name="education" value="MS" />
			<label htmlFor="classes-taken">Classes Taken</label>
			<input type="text" id="classes-taken" name="classes-taken" />
			<label htmlFor="class-expectation">Class Expectations</label>
			<input type="textfield" id="classes-taken" name="classes-taken" />
		</div>
	);
}

export default App;
