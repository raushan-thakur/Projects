import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="flex flex-wrap p-2 m-4 ">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <div className="h-64 w-[30%] m-4 p-2 rounded-lg bg-gray-100">

                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-full h-48 rounded"
                  />
                  <span className="flex p-2 m-2 justify-center ">{prod.title}</span>
                
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="flex justify-center my-4 p-2">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={`px-4 py-2 border border-gray-400 cursor-pointer ${
              page <= 1 && "opacity-0"
            }`}
          >
            ◀
          </span>

          {[...Array(Math.ceil(products.length / 10))].map((_, i) => {
            return (
              <span
                key={i}
                className={`px-4 py-2 border border-gray-400 cursor-pointer ${
                  page === i + 1 && "bg-gray-300"
                }`}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={`px-4 py-2 border border-gray-400 cursor-pointer ${
              page >= products.length / 10 && "opacity-0"
            }`}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
