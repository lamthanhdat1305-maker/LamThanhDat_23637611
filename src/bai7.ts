function task(name: string, time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(name);
      }, time);
    });
  }
  
  const taskk1 = task("Task 1", 3000);
  const taskk2 = task("Task 2", 1000);
  const taskk3 = task("Task 3", 2000);
  
  Promise.race([taskk1, taskk2, taskk3])
    .then((result) => {
      console.log("Task hoàn thành đầu tiên:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });