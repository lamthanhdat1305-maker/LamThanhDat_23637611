function downloadFile(): Promise<void> {
    return new Promise((resolve) => {
      console.log("Downloading file...");
  
      setTimeout(() => {
        console.log("Download completed!");
  
        resolve();
      }, 3000);
    });
  }
  
  async function main(): Promise<void> {
    await downloadFile();
  
    console.log("Program finished.");
  }
  
  main();
