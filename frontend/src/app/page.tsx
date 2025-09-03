
export default function Home() {
  async function testApi() {
    try {
      const response = await fetch("http://localhost:5000/api/example");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  testApi();

  return (
    <main className="bg-gray-900 h-screen p-16">
      <h1 className="text-slate-100 text-xl font-bold">Hello world</h1>
    </main>
  );
}
