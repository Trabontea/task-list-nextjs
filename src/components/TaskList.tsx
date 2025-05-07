'use client';
import { CheckCircle, Circle, Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

export default function TaskItem({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  onEdit,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEdit = () => {
    if (isEditing && editedTitle !== title) {
      onEdit(id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
    if (e.key === 'Escape') {
      setEditedTitle(title);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between lg:items-center lg:gap-10  p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={() => onToggle(id)}>
          {completed ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Circle className="h-5 w-5 text-gray-400" />
          )}
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-2 py-1 border rounded"
            autoFocus
          />
        ) : (
          <span
            className={`${
              completed ? 'line-through text-gray-400' : 'text-gray-700'
            }`}
          >
            {title}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="text-gray-400 hover:text-blue-500 transition-colors"
          aria-label={isEditing ? 'Save task' : 'Edit task'}
        >
          <Pencil className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Delete task"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
}
