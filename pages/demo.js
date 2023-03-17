import React, { useState } from "react";

export default function demo() {
  const [books, setbooks] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (_) => {
    console.log("run");
    books.map((book) => {
      if (book.name == _)
        return alert(`The Option "${_}" is already in the books`);
    });
    const selectedBook = {
      name: _,
      price: 1,
      qty: 1,
    };
    setbooks([selectedBook]);
    setSelectedOption("");
  };

  return (
    <div>
      <h2>Book On</h2>
      <ul>
        <div>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="Book 1">Book 1</option>
            <option value="Book 2">Book 2</option>
            <option value="Book 3">Book 3</option>
          </select>
        </div>
        {books.map((book,index) => (
          <div key={index}>
            <h2>{book.name}</h2>

            {/* <input>{book.price}</input> */}
            <h2>{book.qty * book.price}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
}
