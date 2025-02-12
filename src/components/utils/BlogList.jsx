import React from "react";
import adoptpets from "../../assets/img/adoptpets.jpg";
import iubru from "../../assets/img/iubru.jpeg";
import sakana from "../../assets/img/sakana.jpg";
import gundar from "../../assets/img/gunadarma.jpeg";
import Cards from "./Cards";

const BlogList = ({ limit }) => {
  const cardsData = [
    {
      href: "https://github.com/arifnrhdi/sakana-todo-list",
      target: "_blank",
      image: sakana,
      alt: "Surgeon Fish",
      judul: "Sakana To Do List",
      content: "A simple Website for task management using React and Express JS.",
    },
    {
      href: "https://github.com/arifnrhdi/adoptpets",
      image: adoptpets,
      target: "_blank",
      alt: "Adopt Pets",
      judul: "AdoptPets",
      content: "A dynamic CRUD based animal adoption website using Express JS and React Vite",
    },
    {
      href: "/about-gunadarma",
      target: "_top",
      image: gundar,
      alt: "Arif",
      judul: "About Universitas Gunadarma",
      content: "This article explains information about Gunadarma University, history, and several of the campus's advantages.",
    },
  ];

  const limitedCards = limit ? cardsData.slice(0, limit) : cardsData;

  return (
    <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
      {limitedCards.map((card, index) => (
        <Cards key={index} href={card.href} target={card.target} image={card.image} alt={card.alt} judul={card.judul}>
          {card.content}
        </Cards>
      ))}
    </div>
  );
};

export default BlogList;
