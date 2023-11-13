import React, { useEffect } from "react";
import img1 from "../../assets/upp1.png";
import img2 from "../../assets/upp2.png";
import img3 from "../../assets/upp3.png";
import img4 from "../../assets/upp4.png";
import img5 from "../../assets/upp5.png";
import img6 from "../../assets/upp6.png";

const UpperBody = () => {
  useEffect(() => {
    const imageCarousel = document.querySelector(".image-carousel");

    if (imageCarousel) {
      // Duplicate images for infinite scrolling effect
      const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
      ];
      images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Image";
        imageCarousel.appendChild(img);
      });

      // Set up infinite scrolling animation
      const scrollImages = () => {
        const scrollAmount = 1;
        imageCarousel.scrollLeft += scrollAmount;
        if (
          imageCarousel.scrollLeft ===
          imageCarousel.scrollWidth - imageCarousel.clientWidth
        ) {
          imageCarousel.scrollLeft = 0;
        }
      };

      var scrollInterval; // Declare scrollInterval outside the if block

      scrollInterval = setInterval(scrollImages, 15); // Assign scrollInterval here

      // Stop the scrolling on mouse hover
      imageCarousel.addEventListener("mouseenter", () => {
        clearInterval(scrollInterval);
      });

      // Resume scrolling on mouse leave
      imageCarousel.addEventListener("mouseleave", () => {
        scrollInterval = setInterval(scrollImages, 15);
      });
    }
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="upper-body">
      <h1>Savor the Flavor, From Our Kitchen to Your Door</h1>
      <div className="image-carousel"></div>
    </div>
  );
};

export default UpperBody;
