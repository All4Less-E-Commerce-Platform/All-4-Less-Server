import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { theme } from "@/themes/theme";
import ProductCard from "./ProductCard";

function ProductSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 5) {
      if (products.length > 4) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      if (products.length > 4) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  // Conditionally set the style for centering the products when there are only 2 products
  const isCenterAlign = products.length === 2;

  return (
    <Box
      sx={{ width: "100%", padding: "20px", position: "relative", m: "1em 0" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isCenterAlign ? "center" : "flex-start",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            transition: "transform 0.5s ease-in-out",
            justifyContent: isCenterAlign ? "center" : "flex-start",
          }}
        >
          {products.map((product, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index} sx={{ flex: "0 0 19em" }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Box>

      <Button
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ArrowBackIosIcon style={{ color: theme.palette.primary.orange }} />
      </Button>
      <Button
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={nextSlide}
        disabled={currentIndex === products.length - 1}
      >
        <ArrowForwardIosIcon style={{ color: theme.palette.primary.orange }} />
      </Button>
    </Box>
  );
}

export default ProductSlider;
