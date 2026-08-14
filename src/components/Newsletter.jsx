import Button from "./Button";

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
          <Button title="Enter Your Email" className="mt-4" />
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" viewBox="0 0 24 24" 
       stroke="currentColor" 
       class="w-4 h-4 text-green-500">
    <path stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 13l4 4L19 7" />
  </svg>

          <Button title="Subscribe" className="mt-4" />

        </div>

      </div>

    </section>
  );
}

export default Newsletter;