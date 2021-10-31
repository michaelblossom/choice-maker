import React, { useState } from "react";
import "./App.css";
import Answer from "./Answer";
import Button from "./Button";
function App() {
	const [question, setquestion] = useState("");
	const [options, setOptions] = useState(["", ""]);
	const [questions, setQuestions] = useState([]);
	const [step, setstep] = useState(1);
	const [randomAnswer, setRandomAnswer] = useState("");
	const [popularQuestion, setPopularQuestion] = useState("");

	// function processing the form
	const process = () => {
		if (question === "") {
			alert("Question Must not be empty");
		} else {
			setstep(step + 1);
		}

		setQuestions([...questions, question]);
	};
	const checkInput = (e) => {
		if (e.target.value === "") {
			alert(" Please Insert a value");
		}
	};

	// function to go back to previous main page

	const back = () => {
		setstep((prev) => prev - 1);
		setquestion("");
		setOptions(["", "", ""]);
	};

	// function to handle change
	const handleQuestionChange = (e, index) => {
		setquestion(e.target.value);
	};

	// function to handle option change
	const handleOptionChange = (e, index) => {
		setOptions(Object.assign([...options], { [e]: index }));
	};

	// function to add optons
	const addOption = (e) => {
		setOptions([...options, ""]);
	};

	// function to get random value
	const getRandomValue = (params) => {
		// return params[Math.random() * params.length];
		let randomValue = params[Math.floor(Math.random() * params.length)];

		console.log(randomValue);
		setRandomAnswer(randomValue);
	};

	// function to remove input field

	const removeInputField = (index) => {
		options.splice(index, 1);
		setOptions([options]);
	};

	const checkQuestionPopularity = (arr) => {
		let mf = arr[0],
			maxCount = 0,
			i,
			j;
		let len = arr.length;

		for (i = 0; i < len; i++) {
			let count = 0;
			for (j = i + 1; j < len; j++) {
				if (arr[i] == arr[j]) {
					count++;
				}
			}

			if (maxCount < count) {
				maxCount = count;
				mf = arr[i];
			}
		}

		setPopularQuestion(mf);
		return mf;
	};
	function evaluator() {
		switch (step) {
			case 2:
				return (
					<Answer
						options={options}
						setOptions={setOptions}
						question={question}
						randomAnswer={randomAnswer}
						process={process}
						getRandomValue={getRandomValue}
						back={back}
						questions={questions}
						checkQuestionPopularity={checkQuestionPopularity}
						popularQuestion={popularQuestion}
						setPopularQuestion={setPopularQuestion}
					/>
				);
			default:
				return (
					<div className="App">
						<div className="main">
							<h1>Choice Maker App</h1>
						</div>
						<div className="mainDiv">
							<div className="header">
								<h2>
									Hello! this is Michael Ekene choice maker app that is capable
									of providing random answer to your question from the various
									options that was provided
								</h2>
							</div>
							<div className="question">
								<h4>Question</h4>
							</div>
							<input
								type="text"
								placeholder="Q: Enter your Question"
								onChange={handleQuestionChange}
							/>
							<div className="question">
								<h4>Options</h4>
							</div>

							<div className="input">
								{options.map((option, idx) => {
									return (
										<input
											type="text"
											placeholder={`${idx + 1} Add an Option`}
											onChange={(e) => handleOptionChange(idx, e.target.value)}
										/>
									);
								})}
							</div>
							<Button
								text="Answer "
								onClick={() => {
									getRandomValue(options);
									process();
								}}
							/>
							<Button text="AddOption" onClick={() => addOption()} />
							<Button text="QuestionPopularity" />
						</div>
					</div>
				);
		}
	}
	return <>{evaluator()}</>;
}

export default App;
