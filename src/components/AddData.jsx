import { useState } from "react";

export default function AddData({ setShowModal, setData }) {

    const submitAddData = (e) => {
        e.preventDefault();

        const name = e.target.name.value
        const date = e.target.date.value

        const submitData = {
            name: name,
            dob: date,
            id: Date.now()
        }
        if (!name) {
            setNameError("Name is required.")
            return;
        }

        setData(previousState => [...previousState, submitData])
        setShowModal(false)
    }

    const [nameError, setNameError] = useState("")

    return (
        <div>
            <form className='modal-card' onSubmit={submitAddData}>
                <label>
                    <span>Name:</span>
                    <input type="text" name="name" />
                    <p style={{ color: "red" }}>{nameError}</p>
                </label>
                <label>
                    <span>Date of birth:</span>
                    <input type="date" name="date" />
                </label>
                <button>Submit</button>
                <button onClick={() => setShowModal(false)} type="submit">Close</button>
            </form>
        </div>
    )
}
