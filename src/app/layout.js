"use client";

import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/themes/theme";
import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { DataProvider } from "./context/DataContext";
import { RootLayouts } from "./components/layout/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>All 4 Less</title>
        <link rel="icon" href="/FavIcon.png" sizes="5x5" />
      </head>
      <body
        style={{ backgroundColor: "#fff" }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <SessionProvider>
          <DataProvider>
            <ThemeProvider theme={theme}>
              {!isBrowser ? null : <RootLayouts>{children}</RootLayouts>}
            </ThemeProvider>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
