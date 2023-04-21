import Image from "next/image";
import Link from "next/link";

async function getStreamingLinks(url) {
  try {
    const res = await fetch(
      `https://api.consumet.org/anime/gogoanime/servers/${url}`
    );
    const data = await res.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
}


export default async function AnimePage({ params }) {
    const streamURL = params.id + "-" + params.episode
    const streamLink = await getStreamingLinks(streamURL)

  return (
    <>
        <iframe src={streamLink[0].url} frameborder="0" width={1200} height={800}></iframe>
      {/* <Image src={anime.image} alt={anime.id} width={200} height={400}/>
      <h2>{anime.title}</h2>
      <p>{anime.otherName}</p>
      <span>{anime.genres ? anime.genres.join(", ").trim() : ""}</span>
      <span>{anime.releaseDate}</span>
      <span>{anime.status}</span>
      <p>{anime.description}</p>
      <ul>
        {anime.episodes.map((episode) => <li><Link href={`/anime/${anime.id}/episode-${episode.number}`}>{`Episode ${episode.number}`}</Link></li>)}
      </ul> */}
    </>
  );
}
