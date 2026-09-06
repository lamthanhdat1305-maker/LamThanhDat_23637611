function failingTask(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  
  async function main(): Promise<void> {
    try {
      const result = await failingTask();
  
      console.log("Result:", result);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error:", error.message);
      }
    }
  }
  
  main();