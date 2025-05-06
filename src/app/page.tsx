import { addTask } from '@/actions/action';
import prisma from '@/lib/db';

export default async function Home() {
  const tasks = (await prisma.task.findMany()) || [];

  return (
    <div className="bg-zinc-200 flex  min-h-screen flex-col items-center p-10">
      <h1>All Tasks</h1>
      <ul>
        {tasks && tasks.map((task) => <li key={task.id}>{task.title}</li>)}
      </ul>

      <form action={addTask} className="space-x-2 h-4 mt-10">
        <input
          type="text"
          name="title"
          className="px-3 py-1 rounded bg-white"
        />
        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 rounded text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
