const NotFound = () => {
  return (
    <div className="flex items-center justify-center md:h-[50vh]">
      <section className="flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold md:text-3xl text-white">
            Sorry, we couldn't find any movies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
