import React, { useState, useEffect } from "react";
import { Flag } from "./Flag";
import { ExitButton } from "./Exit";
import styled from "styled-components";

// --- Styled components giữ nguyên UI của bạn ---
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const Container = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const Row = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
const BigCol = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const SmallCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  justify-content: start;
`;
const Input = styled.input`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #4a74ff;
  }
`;
const TextArea = styled.textarea`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-height: 70px;
  &:focus {
    outline: none;
    border-color: #4a74ff;
  }
`;
const Select = styled.select`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #4a74ff;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 0.7rem;
`;
const Button = styled.button`
  flex: 1;
  padding: 12px 0;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  ${({ variant }) =>
    variant === "primary"
      ? `background: #0013fe; color: white;`
      : `background: #e0e0e0; color: black;`}
`;

function PopupTaskForm({ isOpen, onClose, onSubmit, statuses, users, editingTask, flags }) {
  // --- State giữ nguyên UI ---
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("");
  const [flagId, setFlagId] = useState("");

  // --- Fill dữ liệu nếu đang edit ---
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setDeadline(editingTask.deadline ? editingTask.deadline.toISOString().slice(0, 10) : "");
      setAssignedTo(editingTask.assignedTo || "");
      setStatus(editingTask.statusId || "");
      setFlagId(editingTask.flagId || 1);
    } else {
      setTitle("");
      setDescription("");
      setDeadline("");
      setAssignedTo("");
      setStatus("");
      setFlagId(1);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit({
      title,
      description,
      deadline: new Date(deadline),
      assignedTo: Number(assignedTo),
      statusId: Number(status),
      flagId: Number(flagId),
      totalAttachments: editingTask?.totalAttachments ?? 0
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "space-between" }}>
          <div>
          <Flag color={flags.find(f => f.flagId === Number(flagId))?.color || "#00FF00"} />
          <select value={flagId} onChange={e => setFlagId(e.target.value)}>
            {flags.map(f => (
              <option key={f.flagId} value={f.flagId}>{f.name}</option>
            ))}
          </select>
          </div>
          <ExitButton onClick={onClose} />
        </div>
        <h3 style={{ margin: 0 }}>{editingTask ? "Edit Task" : "New Task"}</h3>

        <Row>
          <BigCol>
            <Label>Title</Label>
            <Input
              placeholder="Enter title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </BigCol>

          <SmallCol>
            <Label>End Date</Label>
            <Input
              type="date"
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
            />
          </SmallCol>
        </Row>

        <Row>
          <BigCol>
            <Label>Description</Label>
            <TextArea
              placeholder="Description..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </BigCol>

          <SmallCol>
            <Label>Assign To</Label>
            <Select
              value={assignedTo}
              onChange={e => setAssignedTo(e.target.value)}
            >
              <option value="">-- Select User --</option>
              {users.map(u => (
                <option key={u.userId} value={u.userId}>{u.name}</option>
              ))}
            </Select>
          </SmallCol>
        </Row>

        <BigCol style={{ width: "40%" }}>
          <Label>Status</Label>
          <Select
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option value="">-- Select Status --</option>
            {statuses.map(st => (
              <option key={st.statusId} value={st.statusId}>{st.name}</option>
            ))}
          </Select>
        </BigCol>

        <ButtonRow>
          <Button onClick={onClose}>Cancel</Button>
          <Button style={{ backgroundColor: "#7F56D9", color: "white" }} onClick={handleSubmit}>
            {editingTask ? "Save Changes" : "Save"}
          </Button>
        </ButtonRow>
      </Container>
    </Overlay>
  );
}

export default PopupTaskForm;
