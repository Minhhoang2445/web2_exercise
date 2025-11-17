export function NewItemButton({ name = "New Item", onOpen }) {
    return (
        <button
            onClick={onOpen}
            style={{
                fontWeight: 600,
                padding: "0.25rem 0.8rem",
                borderRadius: "0.5rem",
                backgroundColor: "#0013FE",
                fontSize: "0.875rem",
                color: "white",
                marginRight: "0.5rem",
                width: "fit-content",
                border: "none",
                cursor: "pointer"
            }}
        >
            {name}
        </button>
    );
}
export default NewItemButton;