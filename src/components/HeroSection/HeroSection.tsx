import React from 'react';
import heroImg from 'assets/images/hero.jpg';

export const HeroSection: React.FC = () => (
  <section className="relative h-64 md:h-96 w-full flex items-center justify-center overflow-hidden rounded-xl shadow mb-8">
    <img
      src={heroImg}
      alt="Star War Hero"
      className="absolute inset-0 w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-black opacity-40" />
    <div className="relative z-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
        Welcome to Star Wars Challenge
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-blue-200 drop-shadow">
        The Films, Characters, Planets, Starships, Vehicles, Species and more!
      </p>
    </div>
  </section>
);
