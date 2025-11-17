import React from "react";
import Edit from "./Edit.jsx";

export function EditButton({ isOpen }) {
    return (
        <button onClick={isOpen}>
            <Edit />

        </button>
    )
}

export default EditButton;