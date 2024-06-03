import { useEffect, useState } from "react";

const Shimmer = () => {
    return Array(15)
      .fill(0)
      .map((n, i) => (
        <div key={i} className="p-5 m-5 border border-black rounded-lg">
          <div className="w-64 h-64 bg-gray-200"></div>
        </div>
      ));
  };

  export const MemeCard = ({ data }) => {
    const { url, title, author } = data;
  
    return (
      <div className="p-5 m-5 border border-black rounded-lg">
        <img className="w-52 h-52" alt="meme" src={url} />
        <p>{author}</p>
      </div>
    );
  };

const Infinite = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/10");
    const json = await data.json();

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};
export default Infinite;
