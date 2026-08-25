import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialTodoItems = [
  //   { name: "Buy Milk", dueDate: "2026-06-01" },
  //   { name: "Buy Veg", dueDate: "2026-04-12" },
  //   { name: "Buy Fruits", dueDate: "2026-06-20" },
  // ];

  const [todoItems, setTodoItems] = useState([]); 
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`)
    
    // Functional updates
    setTodoItems((currValue)  =>  // currValue is the most up-to-date, current state.
    [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]
    );
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems= todoItems.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);

  };

  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      </center>
    </div>
  );
}

export default App;
