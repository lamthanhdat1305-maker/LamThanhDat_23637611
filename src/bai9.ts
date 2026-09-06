function getEvenNumbers(numbers: number[]): Promise<number[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((number) => {
          return number % 2 === 0;
        });
  
        resolve(evenNumbers);
      }, 1000);
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  
  getEvenNumbers(numbers)
    .then((result) => {
      console.log("Các số chẵn:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });