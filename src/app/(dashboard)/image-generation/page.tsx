import React from "react";
import Configurations from "@/components/image-geneation/Configurations";
const ImageGeneration = () => {
  return (
    <section className="container mx-auto grid gap-4 grid-cols-3 overflow-hidden">
      <Configurations />
      <div className="col-span-2 p-4 rounded-xl flex items-center justify-center">
        output images
      </div>
    </section>
  );
};

export default ImageGeneration;
