"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

async function getStreamingLinks() {
  try {
    const res = await fetch(
      `https://api.consumet.org/anime/gogoanime/servers/${url}`
    );
    const data = await res.json();
    
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

// async function getAnimeInfo(id) {
//   try {
//     const res = await fetch(
//       "https://api.consumet.org/anime/gogoanime/info/" + id
//     );
//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default function AnimePage({ params: { id } }) {
  const [anime, setAnime] = useState(undefined);
  // const [watch, setWatch] = useState(false);

  useEffect(() => {
    async function getAnimeInfo(id) {
      if (id) {
        const res = await fetch(
          "https://api.consumet.org/anime/gogoanime/info/" + id
        );
        const data = await res.json();
  
        setAnime(data);
      }
    }
    getAnimeInfo(id);
  }, [id]);

  console.log(anime);

  return (
    anime &&
    <>
      <Image src={anime.image} alt={anime.id} width={200} height={400} />
      <h2>{anime.title}</h2>
      <p>{anime.otherName}</p>
      <span>{anime.genres ? anime.genres.join(", ").trim() : ""}</span>
      <span>{anime.releaseDate}</span>
      <span>{anime.status}</span>
      <p>{anime.description}</p>
      <ul>
        {anime.episodes.map((episode) => <li key={anime.id + episode.number}><Link href={`/anime/${anime.id}/episode-${episode.number}`}>{`Episode ${episode.number}`}</Link></li>)}
      </ul>
    </>
  );
}
