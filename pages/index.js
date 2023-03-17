import React, { useState } from "react";

import styles from "../styles/index.module.css";

function Index() {
  const [selectVal, setselectVal] = useState("");

  const [book1, setbook1] = useState({});
  const [book2, setbook2] = useState({});
  const [book3, setbook3] = useState({});

  const [boPi, setboPi] = useState(1);
  const [boQi, setboQi] = useState(1);

  const [btPi, setbtPi] = useState(1);
  const [btQi, setbtQi] = useState(1);

  const [bthPi, setbthPi] = useState(1);
  const [bthQi, setbthQi] = useState(1);

  // console.log(book1,book2,book3)
  // console.log(selectVal)
  function handleClick() {
    if (selectVal === "Book1") {
      setbook1({
        name: "Book1",
        price: 1,
        qty: 1,
      });
    }
    if (selectVal === "Book2") {
      setbook2({
        name: "Book2",
        price: 1,
        qty: 1,
      });
    }
    if (selectVal === "Book3") {
      setbook3({
        name: "Book3",
        price: 1,
        qty: 1,
      });
    }
  }
  return (
    <div>
      <h1 className={styles.header}>Book On</h1>
      <div className={styles.search}>
        <select
          value={selectVal}
          onChange={(e) => setselectVal(e.target.value)}
        >
          <option value="Book1 ">Book 1</option>
          <option value="Book2">Book 2</option>
          <option value="Book3">Book 3</option>
        </select>

        <button onClick={handleClick}>Add Book</button>
      </div>
      <div className={styles.tableheader}>
        <h5>Name</h5>
        <h5>Price</h5> <h5>Qty</h5> <h5>Total</h5>
      </div>
      <div className={styles.list}>
        {book1.name && (
          <>
            <div>
              <h1>{book1.name}</h1>
              <input
                type="number"
                value={book1.price}
                onchange={(e) => setboPi(e.target.value)}
              ></input>
              <input
                type="number"
                value={book1.qty}
                onchange={(e) => setboQi(e.target.value)}
              ></input>
                   <h5>Total:{boQi * boPi}</h5>
            </div>
          </>
        )}
        {book2.name && (
          <>
            <div>
              <h1>{book2.name}</h1>
              <input
                type="number"
                value={book2.price}
                onchange={(e) => setbtPi(e.target.value)}
              ></input>
              <input
                type="number"
                value={book2.qty}
                onchange={(e) => setbtQi(e.target.value)}
              ></input>
              <h5>Total:{btQi * btPi}</h5>
            </div>
          </>
        )}
        {book3.name && (
          <>
            <div>
              <h1>{book3.name}</h1>
              <input
                type="number"
                value={book3.price}
                onchange={(e) => setbthPi(e.target.value)}
              ></input>
              <input
                type="number"
                value={book3.qty}
                onchange={(e) => setbthQi(e.target.value)}
              ></input>
              <h5>Total:{bthQi * bthPi}</h5>
            </div>
          </>
        )}
      </div>
      <div className={styles.totalValue}>
        <h5>Grand Total</h5>
        <h5>{bthQi * bthPi + btQi * btPi + boPi * boQi}</h5>
      </div>
    </div>
  );
}

export default Index;
