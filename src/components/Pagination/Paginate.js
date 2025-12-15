import { useEffect, useState } from "react";

const Paginate = () => {
  /**
   * data
   *  Total card on Page
   *  Total Cards
   *  Card(many)
   *  bar (prev pageNo(1,2,3...,), next)
   *
   */

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch();

    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    //fetchData();
  }, []);

  return (
    <div>
      <div></div>
      <div className="flex gap-4">
        <button>Prev</button>
        <div className="flex gap-2">
          {[...Array(10)].map((_, i) => {
                return (
            <div key={i}>{i}</div>
                )
          })}

        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Paginate;
