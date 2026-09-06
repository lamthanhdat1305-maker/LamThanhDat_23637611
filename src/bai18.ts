// Bài 18:
// Tạo async function fetchUser(id)
// Giả lập API trả về user sau 1 giây.

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: id,
          name: `User ${id}`,
          email: `user${id}@example.com`
        });
      }, 1000);
    });
  }
  
  async function main(): Promise<void> {
    const user = await fetchUser(1);
  
    console.log("User:", user);
  }
  
  main();