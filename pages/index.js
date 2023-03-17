import React, { useState } from "react";

import styles from "../styles/index.module.css";

function Index() {
    // var bookss=[]
    
    // const [books, setbooks] = useState([]);
    
    const [selectVal, setselectVal] = useState("");
  console.log(books);
  const [book1, setbook1] = useState({})
  const [book2, setbook2] = useState({})
  const [book3, setbook3] = useState({})

  console.log(selectVal);
  function handleClick(){
    if(selectVal===Book1){
      set
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

        <button>Add Book</button>
        <div className={styles.tableheader}>
          <h5>Name</h5>
          <h5>Price</h5> <h5>Qty</h5> <h5>Total</h5>
        </div>
        <div className={styles.totalValue}>
          {/* {books.map((it) => {
            return (
              <>
                <div className={styles.list}>
                  <h1>{it.name}</h1>
                  <input type="number" value={it.price} />

                  {/* <h1>{it.qty}</h1>       */}
                  {/* <h1>{it.price}</h1>
                </div>
              </> */}
            {/* ); */}
          {/* })} */} */
          {/* } */}

          <h5>Grand Total</h5>
          <h5>Value</h5>
        </div>
      </div>
    </div>
  );
}

export default Index;
