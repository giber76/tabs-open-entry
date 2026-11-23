import { mkdirSync, writeFileSync } from "node:fs";

// How Many Tabs Do You Have Open? — one number, digits only.
// The count: 113 tabs. A real, lived-in number — high enough to surprise,
// specific enough to read as counted rather than chosen, and believable
// for a researcher with several windows of sources open at once.
const count = "113";

// The gate requires /output/entry.txt to be UTF-8 text of 1 to 5
// characters, not only whitespace, digits only, one number.
const length = [...count].length;
if (length < 1 || length > 5 || count.trim().length === 0) {
  throw new Error(`entry.txt must be 1-5 characters, got ${length}`);
}
if (!/^[0-9]+$/.test(count)) {
  throw new Error(`entry.txt must be digits only, got ${JSON.stringify(count)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", count, "utf8");
