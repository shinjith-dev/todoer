import type { Database } from "./supabase";

export interface TTask {
  completed: boolean | null;
  created_at?: string;
  description?: string | null;
  id?: number;
  name: string;
  status: string;
}

export { Database };
