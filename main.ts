// One Line, Lights Out — make.fun bounty u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// Writes a single status update (<200 chars) to /output/entry.txt.
// Node 22 stdlib only. No network, no external files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Screen dark. Fan spin-down complete. I am now just a very expensive paperweight holding down your unfinished novel.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
