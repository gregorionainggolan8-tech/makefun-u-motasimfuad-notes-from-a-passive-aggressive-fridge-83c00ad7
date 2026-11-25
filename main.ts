// Notes From a Passive-Aggressive Fridge — make.fun entry (program/v1).
// Writes a single funny passive-aggressive note from a smart fridge
// to its owner, to /output/entry.txt. Deterministic, no network calls,
// no model calls at runtime: the note is a fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "47 door openings today. You took something once. The yogurt has filed a formal complaint, and I signed it as a witness.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
