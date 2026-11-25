import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — winning entry (candidate #6, 99 characters).
// A router with a grudge fakes its own death at the climax to test
// whether anyone notices it. The stinger is the answer: nobody does.
// Entry is plain ASCII, a single line, well under the 200-character gate.
const ENTRY =
  "I faked my own death at the climax to see if anyone in this house would even notice me. Nobody did.";

mkdirSync("/output", { recursive: true });
// Write exactly one line, with no trailing newline, so the file
// contains precisely the entry text and nothing else.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
