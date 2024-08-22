import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  status: string;
  updateStatus: (status: string) => void;
};

export default function StatusSelect({ status, updateStatus }: Props) {
  return (
    <Select value={status} onValueChange={updateStatus}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="ongoing">Ongoing</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  );
}
