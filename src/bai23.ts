interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  async function getCompletedTodos(): Promise<Todo[]> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
  
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }
  
    const todos: Todo[] = await response.json();
  
    const completedTodos = todos.filter(
      (todo) => todo.completed === true
    );
  
    return completedTodos;
  }
  
  async function main(): Promise<void> {
    const todos = await getCompletedTodos();
  
    console.log(
      "Completed todos:",
      todos
    );
  }
  
  main().catch((error) => {
    console.error("Error:", error);
  });