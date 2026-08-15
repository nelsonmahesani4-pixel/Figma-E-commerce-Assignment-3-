import Button from "./Button";

function Hero() {
  return (
    <section className="bg-gray-100 px-6 md:px-16 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-5 max-w-md">
            Browse through our diverse range of clothes
            designed to match your style.
          </p>
          <Button title="Shop Now" className="bg-black text-white"/>
          <div className="flex gap-8 mt-10">
            <div>
              <h2 className="text-2xl font-bold">200+</h2>
              <p className="text-gray-500 text-sm">
                International Brands
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">2,000+</h2>
              <p className="text-gray-500 text-sm">
                High-Quality Products
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">30,000+</h2>
              <p className="text-gray-500 text-sm">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="../data/images/Her-Img.jpg" alt="Fashion" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;