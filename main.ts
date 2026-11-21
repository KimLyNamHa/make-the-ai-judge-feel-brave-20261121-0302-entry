import * as fs from "node:fs";
import * as path from "node:path";

const text =
  "Somewhere, a kettle is just coming to the boil, and nobody is in a hurry. The light on the wall is warm. Whatever comes next, you can meet it the way the steam rises: slowly, and without asking permission.";

// One-line output contract: 1-280 Unicode code points, no trailing newline.
const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text must be 1-280 code points, got ${length}`);
}
if (text.includes("\n")) {
  throw new Error("entry text must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), text, "utf8");
