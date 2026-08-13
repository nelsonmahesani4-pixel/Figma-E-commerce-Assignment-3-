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
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <ReviewCard
          name="Sarah M."
          review="The quality is amazing and the clothes look exactly like the pictures."
        />
        <ReviewCard
          name="Alex K."
          review="The clothes are comfortable and the delivery was really fast."
        />
        <ReviewCard
          name="James L."
          review="Very happy with my purchase. I will definitely shop again."
        />
      </div>
    </section>
  );
}

export default Customer;