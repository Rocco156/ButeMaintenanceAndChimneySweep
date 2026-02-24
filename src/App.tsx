/*import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>(); */

function App() {
  /*const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  } */

  return (
    <main>
	  <img src="/transparent-logo.svg" alt="Large logo"/>    
	  <br />
      <h1>Bute Maintenance & Chimney Sweep</h1>
	  <h2> About Us </h2>
	  <p id="text_1">Our family run business has expertise stretching back over 30 years. <br />  We offer a professional service covering the Argyll and Bute region. </p>
	  <br />
	  <h3> Open Services: </h3>
      <ul>
        <li>Sweeping of woodburners & open fires</li>
		<li>Servicing and repairs of stoves</li>
		<li>Certification of servicing, necessary with many house insurance policies</li>
		<li>Small joinery works carried out by a qualified and experienced joiner (Advanced City & Guilds with over 30 years service) who offers carpentry skills including working with listed buildings and conservation projects </li>
		<li>Fencing </li>
		<li>Lock repairs/replacements </li>
		<li>Flat Pack Furniture Assembly </li>
		<li>No job too small </li>
      </ul> <br />
	  <p id="text_2">We pride ourselves on delivering a reliable, high level of craftsmanship in our local area at reasonable rates. <br />Contact us to discuss your bespoke needs and arrange a no fee quote.</p>
		
      <div>
		TelePhone Number: 07733048422
        <p>Email:<a href="mailto:butemaintenance@gmail.com">butemaintenance@gmail.com</a></p>
      </div>
    </main>
  );
}

export default App;
