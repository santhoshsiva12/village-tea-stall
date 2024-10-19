// components/HelloWorld.js
"use server"
const HelloWorld = () => {
    return <div>Hello World!</div>;
  };
  
  // This function simulates a 3-second delay using a promise.
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const LazyHelloWorld = async () => {
    await delay(3000); // Wait for 3 seconds
    return HelloWorld;
  };
  
  export default LazyHelloWorld;
  