import { getTasks } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

type Props = {
  status: "Pending" | "Ongoing" | "Completed";
};

export default function useTasks({ status }: Props) {
  return useQuery({
    queryKey: ["tasks", status],
    queryFn: () => getTasks(status),
    select: ({ data }) => data,
  });
}
