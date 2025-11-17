import UserInfoForm from "./component_bai1/UserInfoForm";
import React from "react";

function Lesson4_bai1() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [submittedData, setSubmittedData] = React.useState(null);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        setIsValidEmail(validateEmail(value));
    };

    const handleSubmit = () => {
        if (!isValidEmail) {
            alert("Email không hợp lệ!");
            return;
        }
        if (!name || !email) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;         
        }
        setSubmittedData({
            name: name,
            email: email
        });
    };

    return (
        <div>
            <h2>User Information Form</h2>

            <UserInfoForm
                onNameChange={setName}
                onEmailChange={handleEmailChange}
            />

            {!isValidEmail && <p style={{ color: "red" }}>Email không hợp lệ!</p>}

            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>

            {/* Khi submit hợp lệ thì hiển thị ở đây */}
            {submittedData && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Submitted Data:</h3>
                    <p><b>Name:</b> {submittedData.name}</p>
                    <p><b>Email:</b> {submittedData.email}</p>
                </div>
            )}
        </div>
    );
}

export default Lesson4_bai1;
