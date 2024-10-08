import { AddTask } from "../add-task";

export default async function Navbar() {
  return (
    <div className="absolute left-0 top-0 z-30 w-screen">
      <div className="container relative mx-auto flex w-full max-w-screen-lg items-center justify-between border-b border-border bg-background py-3 sm:py-4 md:py-5">
        <h3 className="font-serif text-lg font-bold sm:text-xl xl:text-2xl">
          Todoer
        </h3>

        <AddTask />
      </div>
    </div>
  );
}
