function rejectPromise(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  
  rejectPromise().catch((error: Error) => {
    console.log("3.", error.message);
  });