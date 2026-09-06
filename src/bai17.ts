async function main(): Promise<void> {
    const promises: Promise<number>[] = [
      Promise.resolve(10),
      Promise.resolve(20),
      Promise.resolve(30)
    ];
  
    for await (const value of promises) {
      console.log(value);
    }
  }
  
  main();