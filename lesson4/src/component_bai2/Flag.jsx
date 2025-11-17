export function Flag({ color = "", width = 15, height = 17 }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={width}
                height={height}
                fill={color}
            >
                <path d="M4 2h10l1 4h5v13h-5l-1-4H4v11H2V2z" />
            </svg>
        </div>
    );
}
