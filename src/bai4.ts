function randomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * 10) + 1;
  
      setTimeout(() => {
        if (number % 2 === 0) {
          resolve(number);
        } else {
          reject(new Error(`Random number ${number} is odd`));
        }
      }, 500);
    });
  }
  
  randomNumber()
    .then((number) => {
      console.log("4. Random number:", number);
    })
    .catch((error: Error) => {
      console.log("4. Error:", error.message);
    });
  