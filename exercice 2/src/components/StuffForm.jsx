import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!name || !price) return;

    onAddStuff(name, parseFloat(price));

    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit} className="stuff-form">
      <p>Stuff name</p>
      <input type="text" placeholder="Banana" value={name} onChange={(e) => setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="number" placeholder="15" value={price} onChange={(e) =>setPrice(e.target.value)} />

      <button type="submit" >Add Stuff</button>
    </form>
  );
}
