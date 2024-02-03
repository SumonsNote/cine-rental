const data = [
  {
    id: crypto.randomUUID(),
    cover: "2012.jpg",
    title: "2012",
    description:
      "Dr. Adrian Helmsley, part of a worldwide geophysical team investigating the effect on the earth of radiation from unprecedented solar storms, learns that the earth's core is heating up. He warns U.S. President Thomas Wilson that the crust of the earth is becoming unstable and that without proper preparations for saving a fraction of the world's population, the entire race is doomed. Meanwhile, writer Jackson Curtis stumbles on the same information. While the world's leaders race to build 'arks' to escape the impending cataclysm, Curtis struggles to find a way to save his family. Meanwhile, volcanic eruptions and earthquakes of unprecedented strength wreak havoc around the world.",
    genre: "Action, Adventure, Science Fiction",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "inception.jpg",
    title: "Inception",
    description:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
    genre: "Action, Thriller, Science Fiction, Mystery, Adventure",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "interstellar.jpg",
    title: "Interstellar",
    description:
      "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life",
    genre: "Adventure, Drama, Sci-Fi",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "man_of_steel.jpg",
    title: "Man of Steel",
    description:
      "A young boy learns that he has extraordinary powers and is not of this Earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must now emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    genre: "Action, Adventure, Sci-Fi",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "the_creator.jpg",
    title: "The Creator",
    description:
      "Amid a future war between the human race and the forces of artificial intelligence, Joshua, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war-and mankind itself.",
    rating: 5,
    genre: "Action, Adventure, Drama, Sci-Fi, Thriller",
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "the_dark_knight.jpg",
    title: "The Dark Knight",
    description:
      "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as 'The Joker' appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to 'confront everything he believes' and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes",
    rating: 5,
    genre: "Action, Crime, Drama, Thriller",
    price: 100,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };
