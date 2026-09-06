function wait(time: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  
  async function main(): Promise<void> {
    console.log("Start waiting...");
  
    await wait(5000);
  
    console.log("5 seconds completed!");
  }
  
  main();