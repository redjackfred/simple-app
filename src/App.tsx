import "./App.css";
import { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [education, setEducation] = useState("");
	const [classesTaken, setClassesTaken] = useState("");
	const [classExpectations, setClassExpectations] = useState("");

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		const formData = {
			name,
			email,
			education,
			classesTaken,
			classExpectations,
		};

		const json = JSON.stringify(formData, null, 2);

		const blob = new Blob([json], { type: "application/json" });
		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "data.json";

		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}

	return (
		<form
			className="flex flex-col items-center justify-center h-screen"
			onSubmit={handleSubmit}
		>
			<h1 className="text-6xl text-center">Hello World!</h1>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="college-level">BS</label>
			<input
				type="radio"
				id="college-level"
				name="education"
				value="BS"
				onChange={(e) => setEducation(e.target.value)}
			/>
			<label htmlFor="college-level">MS</label>
			<input
				type="radio"
				id="college-level"
				name="education"
				value="MS"
				onChange={(e) => setEducation(e.target.value)}
			/>
			<label htmlFor="classes-taken">Classes Taken</label>
			<input
				type="text"
				id="classes-taken"
				name="classes-taken"
				value={classesTaken}
				onChange={(e) => setClassesTaken(e.target.value)}
			/>
			<label htmlFor="class-expectation">Class Expectations</label>
			<input
				type="textfield"
				id="classes-taken"
				name="class-expectation"
				value={classExpectations}
				onChange={(e) => setClassExpectations(e.target.value)}
			/>
			<button
				type="submit"
				className="w-48 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
			>
				Submit
			</button>
		</form>
	);
}

export default App;
