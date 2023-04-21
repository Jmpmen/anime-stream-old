import Gallery from './components/Gallery'

async function getTopAiring() {
  try {
    const res = await fetch("https://api.consumet.org/anime/gogoanime/top-airing");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

async function getRecentEpisodes() {
  try {
    const res = await fetch("https://api.consumet.org/anime/gogoanime/recent-episodes");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const topAiring = await getTopAiring();
  const recentEpisodes = await getRecentEpisodes();

  return (
    <main>
      <Gallery animeList={topAiring} title="Top Airing" />
      <Gallery animeList={recentEpisodes} title="Recent Episodes"/>
    </main>
  )
}
