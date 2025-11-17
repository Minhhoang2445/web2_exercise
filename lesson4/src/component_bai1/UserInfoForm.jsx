
function UserInfoForm({ onNameChange, onEmailChange }) {
    return (
        <div>
            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => onNameChange(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => onEmailChange(e.target.value)}
            />
        </div>
    );
}

export default UserInfoForm;
