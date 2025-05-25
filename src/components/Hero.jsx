const Hero = () => {
  return (
    // <!-- Begin hero -->
    <section className="section">
      <div className="container">
        <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-y-10">
          <div className="md:flex md:justify-center md:order-2">
            <img
              className="max-md:w-full"
              src="/frame.png"
              
              alt="frame"
            />
          </div>
          <div className="md:w-3/5">
            <h1 className="mb-5 text-[40px] font-bold leading-none text-primary lg:text-[60px]">
              Tasker Task Management Application
            </h1>
            <p className="text-lg my-2 opacity-60">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Hero -->
  );
};

export default Hero;
