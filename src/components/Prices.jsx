import React, { useEffect, useState } from "react";

import { bundleData } from "../data";

import Bundles from "./Bundles";

const Prices = () => {
  const [index, setIndex] = useState(0);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    setBundles(bundleData[0].services);
  }, []);

  const getBundle = name => {
    const newBundle = bundleData.find(bundle => {
      return bundle.name === name;
    });
    setBundles(newBundle.services);
  };

  return (
    <section id="prices" className="py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="text-orange font-semibold mb-3">Our Prices</div>
          <h2 className="h2 mb-3">How Big Is Your Dog?</h2>
          <p className="text-lg text-blue">Choose your dog category</p>
        </div>
        <div className="grid grid-cols-4 gap-4 lg:gap-[30px]">
          {bundleData.map((item, idx) => {
            const { name, image, dogCategory } = item;
            return (
              <div
                onClick={() => {
                  setIndex(idx);
                  getBundle(name);
                }}
                className="cursor-pointer text-center "
                key={idx}
              >
                <div className="mb-2 lg:mb-8 hover:scale-105 transition-allduration-300">
                  <img className="w-full" src={image} alt="" />
                </div>
                <h3 className="lg:text-2xl capitalize font-semibold text-blue lg:mb-2">
                  {name}
                </h3>
                <div
                  className={`${
                    index === idx
                      ? "border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative"
                      : "border-b-4 border-transparent"
                  } pb-4 mb-12`}
                >
                  <div className="hidden lg:block capitalize">
                    {dogCategory}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Bundles bundles={bundles} />
      </div>
    </section>
  );
};

export default Prices;
