import { addTask } from '@/actions/action';

export default function AddForm() {
  return (
    <div>
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
