const input: string[] = (await Bun.file("./01/input.txt").text()).split("\n");
// const input: string[] = (await Bun.file("./01/example.txt").text()).split("\n");

let initial_pos = 50;

let times = 0;

for (const line of input) {
  const value = Number(line.substring(1));

  initial_pos += line[0] === "L" ? -value : value;

  if (Math.abs(initial_pos) % 100 === 0 || initial_pos === 0) times++;
}

console.log(times);
