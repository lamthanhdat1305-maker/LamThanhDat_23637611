function simulateeTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  const task1 = simulateeTask(1000);
  const task2 = simulateeTask(2000);
  const task3 = simulateeTask(1500);
  
  Promise.all([task1, task2, task3])
    .then((results) => {
      console.log("6. Promise.all:", results);
    })
    .catch((error) => {
      console.error("6. Error:", error);
    });