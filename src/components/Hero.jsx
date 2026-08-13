import Button from "./Button";

export default function Hero() {
  return (
    <section className="text-center p-10 bg-gray-100">
      <div>
        <h2 className="text-3xl font-bold">
        Find clothes that matches your style
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Discover the latest trends and find pieces that reflect your unique personality.
      </p>
      <Button />
      <div>
        <img src="./assets/tee.png" alt="" />
      </div>
      </div>
    </section>
  );
}
