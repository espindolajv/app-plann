export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-10 animate-fade-in">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl font-bold  duration-500 ">Your tasks, simplified</h2>
        <h3 className="2xl:text-xl xl:text-base lg:text-sm md:text-sm sm:text-sm font-medium text-zinc-500 duration-500">Ready to help you organize your life</h3>
      </div>
      <div>
        <button className="border-2 border-zinc-300 py-2 px-4 rounded-lg font-medium hover:shadow-xl duration-500">Get started</button>
      </div>
    </main>
  );
}
