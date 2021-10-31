import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function Answer({
	options,
	setOptions,
	checkQuestionPopularity,
	questions,
	randomAnswer,
	process,
	question,
	getRandomValue,
	back,
	popularQuestion,
	setPopularQuestion,
}) {
	console.log(questions);
	console.log(popularQuestion);
	return (
		<div className="App">
			<div className="main">
				<h1>Choice Maker App</h1>
			</div>
			<div class="mainDiv">
				<div className="header">
					<h2>
						Hello! please check below to see the random answer to the question
						that you asked
					</h2>
				</div>
				<div className="question">
					<h4>Question Asked</h4>
				</div>
				<div className="list">
					<h4>{question}</h4>
				</div>
				<div className="question">
					<h4>Options Added</h4>
				</div>
				<div className="input">
					{options.map((option, idx) => {
						return (
							<div className="list">
								<h4 key={idx}>{`${idx + 1} ${option}`}</h4>
							</div>
						);
					})}
				</div>
				<div className="question">
					<h4>Random Choice</h4>
				</div>
				<div className="list" style={{ borderLeft: "10px solid #198754" }}>
					<small style={{ color: "green" }}>{randomAnswer}</small>
				</div>
				<div className="question" style={{ width: "300px" }}>
					<h4>Most Poupular Question</h4>
				</div>
				<div className="list" style={{ borderLeft: "10px solid #0d6efd" }}>
					<small style={{ color: "#0d6efd" }}>{popularQuestion}</small>
				</div>
				<Button text="Another Question " onClick={() => back()} />
				<Button text="Refresh Answer" onClick={() => getRandomValue(options)} />
				<Button
					text="Question Popularity"
					onClick={() => {
						setPopularQuestion(checkQuestionPopularity(questions));
						console.log(popularQuestion);
					}}
				/>
			</div>
		</div>
	);
}

export default Answer;
