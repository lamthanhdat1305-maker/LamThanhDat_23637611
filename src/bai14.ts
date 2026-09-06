
function waitOneSecond(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  
  async function multiplyByThree(
    number: number
  ): Promise<number> {
    await waitOneSecond();
  
    return number * 3;
  }
  
  async function main(): Promise<void> {
    const result = await multiplyByThree(5);
  
    console.log("Result:", result);
  }
  
  main();