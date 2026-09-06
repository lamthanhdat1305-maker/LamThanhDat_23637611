interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  async function main(): Promise<void> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }
  
    const todo: Todo = await response.json();
  
    console.log("Todo:", todo);
  }
  
  main().catch((error) => {
    console.error("Error:", error);
  });