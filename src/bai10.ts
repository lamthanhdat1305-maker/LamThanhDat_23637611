const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Task thành công");
    }, 1000);
  });
  
  promise
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.log("Error:", error);
    })
    .finally(() => {
      console.log("Done");
    });