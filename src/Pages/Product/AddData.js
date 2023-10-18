import React, { useState } from "react";
import { addData } from "../../Services/form";
import { useNavigate } from "react-router-dom";
import {  Navigationbar2 } from "../../Components/Navbar";

export const AddData = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [education, setEducation] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    const handleAddData = async () => {
        const newData = { name, email, contact, education, age, gender };
        const response = await addData(newData);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
            setName("");
            setEmail("");
            setContact("");
            setEducation("");
            setAge("");
            setGender("");
            Navigate("/form/all");
        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);

            
        }
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        handleAddData();
    }

    return (
        <div>
            <Navigationbar2/>
        <div className="border-2 border-neutral bg-info m-1 h-screen flex justify-center items-center">
            <div>
                <span className="text-4xl ">Fill the form with Your Details</span>
                <form className="forms " onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="input input-bordered input-info w-full " value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" className="input input-bordered input-info w-full " value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Contact" className="input input-bordered input-info w-full " value={contact} onChange={(e) => setContact(e.target.value)} />
                    <input type="text" placeholder="Education" className="input input-bordered input-info w-full " value={education} onChange={(e) => setEducation(e.target.value)} />
                    <input type="text" placeholder="Age" className="input input-bordered input-info w-full " value={age} onChange={(e) => setAge(e.target.value)} />
                    <input type="text" placeholder="Gender" className="input input-bordered input-info w-full " value={gender} onChange={(e) => setGender(e.target.value)} />
                    <button className="btn btn-info bg-neutral btn-outline max-w-md" type="submit">Add Data</button>
                </form>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
        </div>
    );
};
