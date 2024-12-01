"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FeaturedProducts } from "@/app/components/home/FeaturedProducts";
import { theme } from "@/themes/theme";
import AdsSection from "@/app/components/home/AdsSection";
import { UnknownSection } from "@/app/components/home/UnknownSection";
import { InfoSection } from "@/app/components/home/InfoSection";
import IncomesProducts from "@/app/components/home/IncomesProducts";
import { BackgroundSlider } from "@/app/components/home/BackgroundSlider";
import { useData } from "./context/DataContext";
import { LoadingPage } from "./components/Loading/LoadingPage";
// const productData = [

// ]
export default function Home() {
  const { productData } = useData();

  const [featured, setFeatured] = useState([]);
  const [inComes, setInComes] = useState([]);
  const [IsBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (productData) {
      const filtered = productData.filter((item) => item.featured === true);
      const filtered2 = productData.filter((item) => item.incomes === true);
      setFeatured(filtered);
      setInComes(filtered2);
    }
  }, [productData]);

  if (!IsBrowser) return null;
  console.log(productData);

  if (!productData) return <LoadingPage />;
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.wBkg,
      }}
    >
      <BackgroundSlider />
      {featured.length && <FeaturedProducts products={featured} />}
      <AdsSection />
      {inComes.length && <IncomesProducts products={inComes} />}
      <UnknownSection />
      <InfoSection />
    </Box>
  );
}
