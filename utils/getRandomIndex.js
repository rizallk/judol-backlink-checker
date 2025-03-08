// Function to get a random object from the array
export default function getRandomIndex(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
