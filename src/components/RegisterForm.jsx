import React, { useState, useEffect } from "react";
import registerForm from "../data/registerForm";

const Input = ({ icon, placeholder, type, name, formData, setFormData }) => {
	return (
		<div className="input">
			<i className={icon}></i>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				autoComplete="off"
				onChange={(e) => {
					setFormData({ ...formData, [name]: e.target.value });
				}}
				required
			/>
		</div>
	);
};

const Selection = ({ placeholder, options, name, formData, setFormData }) => {
	function toggle(array, value) {
		var index = array.indexOf(value);

		if (index === -1) {
			array.push(value);
		} else {
			array.splice(index, 1);
		}
	}
	return (
		<div className="selection">
			<div className="title">{placeholder} </div>
			{options.map((option, index) => (
				<div className="checkbox" key={index}>
					<div className="tick">
						<input type="checkbox" id={option} name={name} />
						<label
							htmlFor={option}
							onClick={() => {
								const newEvents = [...formData[name]];
								toggle(newEvents, option);
								setFormData({ ...formData, [name]: newEvents });
							}}
						></label>
					</div>
					<div>{option}</div>
				</div>
			))}
		</div>
	);
};

const DropDown = ({ placeholder, options, name, formData, setFormData }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className={isOpen ? "dropdown active" : "dropdown"}
			onClick={() => {
				setIsOpen(!isOpen);
			}}
		>
			<div className="title">
				{placeholder} {formData[name] !== "" && `(${formData[name]})`}
			</div>
			<i className="fas fa-sort-down"></i>
			<div className="dropdown-content">
				{options.map((option, index) => (
					<div
						className={formData[name] === option ? "item selected" : "item"}
						key={index}
						onClick={() => {
							if (formData[name] === option) {
								setFormData({ ...formData, [name]: "" });
							} else {
								setFormData({ ...formData, [name]: option });
							}
						}}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	);
};

const PopUp = () => {
	return (
		<div className="popup">
			<div className="container">
				<img src="/assets/loading.gif" alt="" />
			</div>
		</div>
	);
};

const RegisterForm = () => {
	const initialFormData = {
		confirm: "no",
	};
	registerForm.forEach((input) => {
		if (input.type === "selection") {
			initialFormData[input.name] = [];
		} else {
			initialFormData[input.name] = "";
		}
	});
	const [formData, setFormData] = useState(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const submitForm = (e) => {
		e.preventDefault();
		console.log("fds");
		let empty = false;
		Object.keys(formData).map((key, index) => {
			console.log(formData[key]);
			if (formData[key] === "" || formData[key] === []) {
				empty = true;
			}

			return "";
		});
		if (empty) {
			alert("Please fill all the fields");
		} else {
			setIsSubmitting(true);
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	console.log(formData);
	return (
		<div className="registerform">
			{isSubmitting && <PopUp />}
			<div className="container">
				<div className="title">Register</div>
				<form className="form" onSubmit={submitForm}>
					{registerForm.map((input, index) => {
						if (input.type === "text" || input.type === "email" || input.type === "tel") {
							return <Input {...input} key={index} formData={formData} setFormData={setFormData} />;
						} else if (input.type === "selection") {
							return <Selection {...input} key={index} formData={formData} setFormData={setFormData} />;
						} else if (input.type === "dropdown") {
							return <DropDown {...input} key={index} formData={formData} setFormData={setFormData} />;
						}
						return "";
					})}
					<div className="confirm">
						<div className="checkbox">
							<div className="tick">
								<input type="checkbox" id="confirm" name="confirm" required />
								<label
									htmlFor="confirm"
									onClick={() => {
										setFormData({ ...formData, confirm: "newEvents" });
									}}
								></label>
							</div>
							<div>Confirm?</div>
						</div>
					</div>
					<button className="submit" type="submit">
						submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
