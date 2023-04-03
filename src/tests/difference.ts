export default function difference(...numbers: number[]) {
  return numbers.reduce((total, number) => total - number, 0);
}
