import ReviewCard from "./ReviewCard";

function Customer() {
  return (
    <section className="py-12 px-5">

      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-black">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="text-sm">
          ← →
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-10 overflow-x-auto md:overflow-x-hidden  grid-cols-1 ">
        <div className="md:ml-0 md:w-full">
        <ReviewCard
          name="Sarah M."
          review="The quality is amazing and the clothes look exactly like the pictures."
        /></div>
        <div className="md:ml-0 md:w-full">
        <ReviewCard
          name="Alex K."
          review="The clothes are comfortable and the delivery was really fast."
        />
        </div>

        <div className="md:ml-0 md:w-full">
        <ReviewCard
          name="James L."
          review="Very happy with my purchase. I will definitely shop again."
        />
        </div>
        <div className ="ml-40 md:mr-12 md:w-full w-full h-full">
        <ReviewCard
          name="James L."
          review="Very happy with my purchase. I will definitely shop again."
        /></div>
      </div>
    </section>
  );
}

export default Customer;