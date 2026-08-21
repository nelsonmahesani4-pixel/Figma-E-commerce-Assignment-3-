import casual from "../data/images/casual.png";
import formal from "../data/images/formal.png";
import party from "../data/images/party.png";
import gym from "../data/images/gym.png";

function DressStyle() {
  return (
    <section className="bg-gray-100 rounded-3xl mx-5 md:mx-16 px-5 py-8">
      <h2 className="text-2xl md:text-3xl font-black text-center">
        BROWSE BY DRESS STYLE
      </h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-3 mt-6">

        <div className="relative rounded-xl overflow-hidden">
          <img
            src={casual}
            alt="Casual"
            className="w-full h-40 md:h-64 object-cover"
          />   
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <img
            src={formal}
            alt="Formal"
            className="w-full h-40 md:h-64 object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={party}
            alt="Party"
            className="w-full h-40 md:h-64 object-cover"
          />
       </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={gym}
            alt="Gym"
            className="w-full h-40 md:h-64 object-cover"
          />
        </div>

      </div>

    </section>
  );
}

export default DressStyle;