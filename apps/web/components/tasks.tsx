import Task from "./task";

export default function Tasks() {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-3">Pending</h3>

      <ul className="space-y-3">
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </ul>
    </div>
  )
}
