import { useEffect, useState } from "react";
const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

const JobPosting =({ url, by, time, title }) => {
    const formattedTime = new Date(time * 1000).toLocaleString();
  
    return (
      <div className="bg-white border border-gray-300 rounded p-4 grid gap-2" role="listitem">
        <h2 className="text-lg font-bold mt-0">
          <a
            className={url ? "" : "pointer-events-none cursor-default"}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <span className="text-sm text-gray-700">
          By {by} · {formattedTime}
        </span>
      </div>
    );
  }
  
const Job =() => {
  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
const fetchItems =async (currPage)=> {
    setCurrentPage(currPage);
    setFetchingDetails(true);

    let itemsList = itemIds;
    if (itemsList === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsList = await response.json();
      setItemIds(itemsList);
      
    }
    //console.log("itemIds", itemsList);
    const itemIdsForPage = itemsList.slice(
      currPage * ITEMS_PER_PAGE,
      currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const itemsForPage = await Promise.all(
        itemIdsForPage.map(async (itemId) => {
          const response = await fetch(`${API_ENDPOINT}/item/${itemId}.json`);
          return await response.json();
        })
    );
      
  
    setItems([...items, ...itemsForPage]);

    setFetchingDetails(false);
  }

  useEffect(() => {
    fetchItems(currentPage);
  }, []);


  return (
    <div className="max-w-4xl mx-auto bg-orange-50 p-10">
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Hacker News Jobs Board</h1>
      {itemIds === null || items.length < 1 ? (
        <p className="text-gray-800 font-bold text-lg">Loading...</p>
      ) : (
        <div>
          <div className="grid gap-4" role="list">
            {items.map((item,i) => (
              <JobPosting key={item.id +i} {...item} />
            ))}
          </div>
          {items.length > 0 &&
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE < itemIds.length && (
              <button
                className={`bg-orange-600 text-white rounded px-3 py-2 mt-5 disabled:opacity-50`}
                disabled={fetchingDetails}
                onClick={() => fetchItems(currentPage + 1)}
              >
                {fetchingDetails ? "Loading..." : "Load more jobs"}
              </button>
            )}
        </div>
      )}
    </div>
  );
}

export default Job;