function Newsletter() {
  return (
    <section className="bg-black text-white rounded-xl mx-5 md:mx-16 px-6 py-7">

      <div className="md:flex justify-between items-center gap-6">

        <h2 className="text-2xl md:text-3xl font-black max-w-md">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <div className="mt-5 md:mt-0 w-full md:w-auto">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-64 px-5 py-3 rounded-full text-black outline-none"
          />

          <button className="bg-white text-black w-full md:w-auto px-6 py-3 rounded-full mt-2">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;