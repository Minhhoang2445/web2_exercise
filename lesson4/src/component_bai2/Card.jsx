import React from 'react'
import '../css/card.css'
import { Flag } from './Flag.jsx'
import { Attach } from './Attach.jsx'
import { ClockIcon } from './Clock.jsx'
import { Name } from './Name.jsx'
import { EditButton } from './EditButton.jsx'
function Card({ students }) {
    return (
        <div>
            {students.map((student, index) => (
                <div key={index} className="card">
                    <h2>{student.name}</h2>
                    <p>Class: {student.class}</p>
                    <p>Note: {student.note}</p>
                </div>
            ))}
        </div>
    );
}

function TaskCard({ task, users, flags, onEdit }) {
    const deadline = task.deadline.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

    const user = users.find(u => u.userId === task.assignedTo);
    const flag = flags.find(f => f.flagId === task.flagId);
    let disabled = false;
    if (task.totalAttachments != 0){
        disabled = true;
    }
    return (
        <div className="task-card" >
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
            <h3>{task.title}</h3>
            <EditButton width={16} height={16} isOpen={() => onEdit(task)} />
            </div>
            <p>{task.description}</p>
            <Name name={user?.name}></Name>
            <hr className="divider" /> 
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" , justifyContent: "center"}}>
            <Flag color={flag?.color}></Flag>
            <Attach totalAttachments={task.totalAttachments} disabled={disabled}></Attach>
            <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
            <ClockIcon></ClockIcon>
            <span className="deadline">{deadline}</span>
            </div>
            </div>
        </div>
    );
}

function BigCard({ status, tasks, users, flags, onEdit, onAdd }) {
    return (
        <div className="big-card">
            <div className="big-card-header">
                <div style={{ display: "flex", gap: "1rem",  alignItems: "center"}} >
                <h2>{status.name}</h2>
                <span className = "task-count">{tasks.length}</span>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span
                        className="task-count"
                        style={{ cursor: "pointer" }}
                        onClick={onAdd}
                    >
                        +
                    </span>                
                    <span className="task-count"> ··· </span>
                </div>
            </div>

            <div className="task-list">
                {tasks.map(task => (
                    <TaskCard key={task.taskId}
                        task={task}
                        users={users}
                        flags={flags}
                        onEdit={onEdit}
                      />
                ))}
            </div>
        </div>
    );
}


export default Card;
export { BigCard, TaskCard };
