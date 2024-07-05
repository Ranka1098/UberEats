import React from "react";

const HeadLineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* card 1*/}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-4">Sun's Out BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food img.." />
      </div>


      {/* card 2*/}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-4">New Restaurent</p>
          <p className="px-2">Add Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food img.." />
      </div>


      {/* card 3 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-4">We Delivered Deserts</p>
          <p className="px-2">Tasty treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food img.." />
      </div>
    </div>
  );
};

export default HeadLineCard;
