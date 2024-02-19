import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>

<GoogleOAuthProvider clientId="129495317524-pevm8onuc8cqlld1hq9ks9lk4otkd2f4.apps.googleusercontent.com">
  <Component {...pageProps} /></GoogleOAuthProvider> 
    </div>;
}
