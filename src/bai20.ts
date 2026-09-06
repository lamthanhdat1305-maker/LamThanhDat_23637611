interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: id,
          name: `User ${id}`,
          email: `user${id}@example.com`
        });
      }, 3000);
    });
  }
  
  function timeout(time: number): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("API call timeout"));
      }, time);
    });
  }
  
  async function fetchUserWithTimeout(
    id: number
  ): Promise<User> {
  
    return Promise.race([
      fetchUser(id),
      timeout(2000)
    ]);
  }
  
  async function main(): Promise<void> {
    try {
      const user = await fetchUserWithTimeout(1);
  
      console.log("User:", user);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error:", error.message);
      }
    }
  }
  
  main();