interface Todo {
    id?: number;
    userId: number;
    title: string;
    completed: boolean;
  }
  
  async function postData(): Promise<Todo> {
    const newTodo: Todo = {
      userId: 1,
      title: "Learn TypeScript",
      completed: false
    };
  
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json"
        },
  
        body: JSON.stringify(newTodo)
      }
    );
  
    if (!response.ok) {
      throw new Error(
        `POST Error: ${response.status}`
      );
    }
  
    return response.json();
  }
  
  async function main(): Promise<void> {
    const result = await postData();
  
    console.log("POST result:", result);
  }
  
  main().catch((error) => {
    console.error("Error:", error);
  });