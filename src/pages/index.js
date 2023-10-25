import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@bretzkierra/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-2e294e text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-xl mb-8">Kierra Bretz</p>
      <a
        href="#"
        className="bg-d7263d hover:bg-f46036 text-white font-semibold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out"
      >
        Lets Get Started
      </a>
      <p className="mt-4 text-sm">Powered by React and Tailwind CSS</p>
    </div>
  );
}
