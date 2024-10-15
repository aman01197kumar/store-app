import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

function Books() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4001/store");
      setData(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl md:flex items-center m-8 md:grid md:grid-cols-3 md:gap-4">
      {data?.map(({ id, book_name, description, category }) => (
        <div className="mb-5" key={id}>
          <BookCard
            id={id}
            book_name={book_name}
            description={description}
            category={category}
          />
        </div>
      ))}
    </div>
  );
}

export default Books;
