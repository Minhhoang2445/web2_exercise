
import React from "react";
import Card from "./components/Card.jsx";

function MyCardContainer() {
    const students = [
    {
        name: "Nguyễn Văn Tài",
        class: "Code Intensive",
        note: "Trở thành master coding là ước mơ của tôi"
    },
    {
        name: "Trịnh Mẫn Nhi",
        class: "Full-stack",
        note: "Học, học nữa, học mãi"
    },
    {
        name: "Vũ Long Môn",
        class: "Code for everyone",
        note: "quá trình học tập là quan trọng nhất"
    },
];
    return (
        <>
         <Card students={students} />
        </>
    );
}
export default MyCardContainer;
