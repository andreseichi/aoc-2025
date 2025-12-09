const input: string[] = (await Bun.file("./01/input.txt").text()).split("\n");
// const input: string[] = (await Bun.file("./01/example.txt").text()).split("\n");

let position = 50;
let times = 0;

for (const line of input) {
  const value = Number(line.substring(1));

  for (let i = 0; i < value; i++) {
    if (line[0] === "L") {
      position = (position - 1) % 100;
    } else {
      position = (position + 1) % 100;
    }

    if (position === 0) times++;
  }
}

console.log(times);
