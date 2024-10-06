export default function returnHowManyArguments(...theArgs) {
  let lenght = 0;
  for (const arg of theArgs) {
    lenght++;
  }
  return lenght;
}
