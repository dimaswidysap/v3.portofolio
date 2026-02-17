const FinderComponent = () => {
  return (
    <section className="overflow-hidden hidden fixed h-82 md:w-[80%] lg:w-200 bg-[#1e1e1e]  top-[20%] left-[50%] -translate-x-[50%] z-50 rounded-2xl">
      <header className="absolute w-full h-10 bg-[#333] flex items-center">
        <div className="h-full flex gap-1.5 items-center pl-2">
          <span className="h-3.5 aspect-square bg-[#ff5f56] rounded-full"></span>
          <span className="h-3.5 aspect-square bg-[#ffbd2e] rounded-full"></span>
          <span className="h-3.5 aspect-square bg-[#27c93f] rounded-full"></span>
        </div>
      </header>
    </section>
  );
};
export default FinderComponent;
