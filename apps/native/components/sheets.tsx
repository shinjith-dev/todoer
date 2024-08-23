import { SheetDefinition, registerSheet } from "react-native-actions-sheet";
import TaskAction from "./task/action-sheet";
import { TTask } from "@/lib/types";
import TaskSheet from "./task/task-sheet";
import EditSheet from "./task/edit-sheet";

registerSheet("task-action", TaskAction);
registerSheet("task-sheet", TaskSheet);
registerSheet("edit-sheet", EditSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "task-action": SheetDefinition<{
      payload: {
        task: TTask;
        openStatusModal: () => void;
        refresh: () => void;
      };
    }>;
    "task-sheet": SheetDefinition<{
      payload: {
        task?: TTask;
      };
    }>;
    "edit-sheet": SheetDefinition<{
      payload: {
        task?: TTask;
        refresh?: () => void;
      };
    }>;
  }
}

export {};
