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
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis mi eget tortor blandit, a aliquet lacus bibendum. Duis tempor nisi ac neque sollicitudin, vitae gravida orci consequat. Nunc pulvinar quis tellus sit amet volutpat. Quisque faucibus purus ex, facilisis suscipit magna convallis fermentum. Cras et magna et purus tempor viverra sit amet a turpis. Praesent urna magna, tempor quis est quis, interdum volutpat quam. Mauris id scelerisque lectus. Etiam sit amet tempus metus. Quisque venenatis mi vitae nulla egestas feugiat. Nam vehicula orci turpis, fermentum tincidunt mi condimentum quis. Curabitur tincidunt libero nec ante ornare tempus. </p>
      <ul>
        <li>joinery</li>
		<li>sweeping</li>
		<li>General Reapirs</li>
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
