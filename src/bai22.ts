interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  async function fetchTodo(id: number): Promise<Todo> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  
    if (!response.ok) {
      throw new Error(
        `Failed to fetch todo ${id}`
      );
    }
  
    return response.json();
  }
  
  async function main(): Promise<void> {
    const ids = [1, 2, 3];
  
    const todos = await Promise.all(
      ids.map((id) => fetchTodo(id))
    );
  
    console.log("Todos:");
  
    todos.forEach((todo) => {
      console.log(todo);
    });
  }
  
  main().catch((error) => {
    console.error("Error:", error);
  });