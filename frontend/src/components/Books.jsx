import React from "react";
import bookList from "../../public/bookList.json";
import BookCard from "./BookCard";

function Books() {

  return (
    <div className="max-w-screen-2xl md:flex items-center m-8 md:grid md:grid-cols-3 md:gap-4">
    {bookList?.map(({ id, book_name, description, category }) => (
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
