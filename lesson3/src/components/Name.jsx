export function Name({ name = "" }) {
    return (
        <div
            style={{
                fontWeight: 600,
                padding: "0.25rem 0.8rem",
                borderRadius: "0.5rem",
                backgroundColor: "#0013FE",
                fontSize: "0.875rem",
                color: "white",
                marginRight: "0.5rem",
                width: "fit-content"

            }}
        >
            <div style={{ marginLeft: 4, fontSize: 15 }}>
                {name}
            </div>
        </div>
    );
}
