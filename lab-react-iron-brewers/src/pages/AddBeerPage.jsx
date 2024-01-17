import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const initialState = {
	name: "",
	tagline: "",
	description: "",
	imageUrl: "",
	firstBrewed: "",
	brewersTips: "",
	attenuationLevel: 0,
	contributedBy: "",
}

function AddBeerPage() {
	// State variables to store the values of the form inputs. You can leave these as they are.
	const [state, setState] = useState(initialState)
	const navigate = useNavigate()
	const handleChange = (e) => {
		let value = e.target.value
		if (e.target.type === "number") {
			value = e.target.valueAsNumber
		}
		setState({ ...state, [e.target.name]: value })
		// const cat = {
		// 	isCute: true,
		// 	name: "Illiu",
		//   colors
		// }

		// const event = {
		//   target: {
		//     name: "isCute"
		//   }
		// }
		// console.log(cat[event.target.name])
	}

	// TASK:
	// 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
	// 2. Use axios to make a POST request to the Beers API.
	// 3. Once the beer is created, navigate the user to the page showing the list of all beers.

	function handleSubmit(event) {
		event.preventDefault()
		const beerToCreate = {
			name: state.name,
			tagline: state.tagline,
			describe: state.description,
			image_url: state.imageUrl,
			first_brewed: state.firstBrewed,
			brewers_tips: state.brewersTips,
			attenuation_level: state.attenuationLevel,
			contributed_by: state.contributedBy,
		}
		axios
			.post("https://ih-beers-api2.herokuapp.com/beers/new", beerToCreate)
			.then((res) => {
				console.log(res)
				navigate("/beers")
			})
			.catch(console.error)
	}

	// Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
	return (
		<>
			<div className="d-inline-flex flex-column w-100 p-4">
				<form onSubmit={handleSubmit}>
					<label>Name</label>
					<input
						className="form-control mb-4"
						type="text"
						name="name"
						placeholder="Beer Name"
						value={state.name}
						onChange={handleChange}
					/>
					<label>Tagline</label>
					<input
						className="form-control mb-4"
						type="text"
						name="tagline"
						placeholder="Beer Tagline"
						value={state.tagline}
						onChange={handleChange}
					/>

					<label className="form-label">Description</label>
					<textarea
						className="form-control mb-4"
						type="text"
						name="description"
						placeholder="Description"
						rows="3"
						value={state.description}
						onChange={handleChange}></textarea>

					<label>Image</label>
					<input
						className="form-control mb-4"
						type="text"
						name="imageUrl"
						placeholder="Image URL"
						value={state.imageUrl}
						onChange={handleChange}
					/>

					<label>First Brewed</label>
					<input
						className="form-control mb-4"
						type="text"
						name="firstBrewed"
						placeholder="Date - MM/YYYY"
						value={state.firstBrewed}
						onChange={handleChange}
					/>

					<label>Brewer Tips</label>
					<input
						className="form-control mb-4"
						type="text"
						name="brewersTips"
						placeholder="..."
						value={state.brewersTips}
						onChange={handleChange}
					/>

					<label>Attenuation Level</label>
					<div className="input-group mb-2">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">
								%
							</span>
						</div>
						<input
							className="form-control mb-4"
							type="number"
							name="attenuationLevel"
							value={state.attenuationLevel}
							onChange={handleChange}
							min={0}
							max={100}
						/>
					</div>

					<label>Contributed By</label>
					<input
						className="form-control mb-4"
						type="text"
						name="contributedBy"
						placeholder="Contributed by"
						value={state.contributedBy}
						onChange={handleChange}
					/>
					<button className="btn btn-primary btn-round">Add Beer</button>
				</form>
			</div>
		</>
	)
}

export default AddBeerPage
