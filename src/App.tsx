import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.jpeg";
import image7 from "./images/image7.jpeg";
import image8 from "./images/image8.jpeg";
import image9 from "./images/image9.jpeg";

const images: string[] = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

export default function App() {
  const slider = useRef<any>();

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth);
  }, []);

  return (
    <main>
      <motion.div ref={slider} className="slider" whileTap={{ cursor: "grabbing" }}>
        <motion.div className="inner" drag="x" dragConstraints={{ right: 0, left: -width }} initial={{ x: 300 }} animate={{ x: 0 }} transition={{ duration: 1.0 }}>
          {images.map((image) => (
            <motion.div className="image">
              <img src={image} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}