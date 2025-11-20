import { Fira_Code as FontMono, Inter as FontSans, Dela_Gothic_One as FontGothic } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const fontGothic = FontGothic({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "400",
})