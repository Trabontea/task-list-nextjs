import { prisma } from '@/lib/prisma';
import TaskList from '@/components/TaskList';
import AddForm from '@/components/AddForm';
import { toggleTask, deleteTask, editTask } from '@/actions/action';

export default async function Home() {
  const tasks = (await prisma.task.findMany()) || [
    {
      id: 1,
      title: 'No tasks found',
    },
  ];

  async function handleToggle(id: string) {
    'use server';
    await toggleTask(id);
  }

  async function handleDelete(id: string) {
    'use server';
    await deleteTask(id);
  }

  async function handleEdit(id: string, title: string) {
    'use server';
    await editTask(id, title);
  }

  return (
    <div className="bg-zinc-200 flex  min-h-screen flex-col items-start p-10">
      <h1>All Tasks</h1>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskList
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
      <AddForm />.
    </div>
  );
}
