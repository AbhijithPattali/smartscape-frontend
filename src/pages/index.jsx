import React from "react";
import App from "../app/profiles/app";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <App />
    </main>
  );
}
