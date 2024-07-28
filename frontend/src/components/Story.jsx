import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Story = () => {
	const { id } = useParams();
	const [story, setStory] = useState(null);
	const [contributions, setContributions] = useState([]);
	const [newContribution, setNewContribution] = useState("");
	const user = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		const fetchStory = async () => {
			const response = await axios.get(
				`https://redsoftware-backend.onrender.com/stories/${id}`,
			);
			setStory(response.data);
		};

		const fetchContributions = async () => {
			const response = await axios.get(
				`https://redsoftware-backend.onrender.com/contributions?storyId=${id}`,
			);
			setContributions(response.data);
		};

		fetchStory();
		fetchContributions();
	}, [id]);

	const handleAddContribution = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://redsoftware-backend.onrender.com/contributions",
				{
					storyId: id,
					authorId: user.id,
					text: newContribution,
					authorName: user.username,
				},
			);
			setContributions([...contributions, response.data]);
			setNewContribution("");
		} catch (error) {
			alert("Failed to add contribution");
		}
	};

	if (!story) return <div>Loading...</div>;

	return (
		<div className="container mx-auto mt-8">
			<h1 className="text-2xl font-bold mb-4">{story.title}</h1>
			<p>{story.firstSentence}</p>
			<div className="mt-6">
				<h2 className="text-xl font-bold">Contributions</h2>
				<ul className="mt-4">
					{contributions.map((contribution) => (
						<li key={contribution.id} className="mb-2">
							<strong>{contribution.authorName}:</strong> {contribution.text}
						</li>
					))}
				</ul>
				{!story.completed && (
					<form onSubmit={handleAddContribution} className="mt-6">
						<div className="mb-4">
							<label
								className="block text-sm font-bold mb-2"
								htmlFor="contribution"
							>
								Add your contribution
							</label>
							<textarea
								id="contribution"
								value={newContribution}
								onChange={(e) => setNewContribution(e.target.value)}
								className="w-full p-2 border border-gray-300 rounded"
								rows="3"
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded"
						>
							Add Contribution
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Story;
