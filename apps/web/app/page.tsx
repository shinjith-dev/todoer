import Tasks from "@/components/tasks";

export default function Home() {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20">
      <div className="py-10 text-center sm:py-14 md:py-16 lg:py-20">
        <h3 className="mx-auto mb-2 max-w-[240px] font-serif text-2xl font-bold tracking-tight sm:max-w-[300px] sm:text-3xl md:mb-4 md:max-w-sm md:text-4xl lg:max-w-xl lg:text-5xl xl:max-w-2xl xl:text-6xl">
          All in One Task Management System{" "}
        </h3>
        <p className="mx-auto max-w-xs text-xs sm:max-w-sm sm:text-sm md:max-w-md md:text-base lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          Track your tasks across devices and access it from wherever you go.
          Todoer allows to add and manage your tasks seamlessly and track your
          progress.
        </p>
      </div>

      <Tasks />
    </div>
  );
}
