// In a separate file, e.g., data.ts
export interface Person {
  id: number;
  name: string;
  age: number;
  description: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    description: "Praesent sit amet felis hendrerit, interdum quam vitae.",
  },
  // Add more people here...
];

export default people;
