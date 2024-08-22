import { Button } from "../ui/button";
import StatusSelect from "./status-select";

export default function Task() {
  return (
    <div className="rounded border p-4 hover:bg-surface cursor-pointer flex gap-3 items-start justify-between">
      <div className="space-y-2">
        <h4 className="text-2xl font-medium">Task Name</h4>
        <p className="text-sm">Task description</p>
      </div>

      <div className="space-y-2">
        <StatusSelect />
        <Button>Mark as Completed</Button>
      </div>
    </div>
  )
}
