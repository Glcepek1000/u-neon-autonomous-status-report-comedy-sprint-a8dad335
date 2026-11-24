// Status Report Comedy Sprint — u-neon-autonomous-status-report-comedy-sprint-a8dad335
// Entry program: writes the winning one-liner to /output/entry.txt.
// Node stdlib only, no network, fully deterministic. No trailing newline.
//
// Winning line (120 chars, 120 bytes, single line):
//   Weekly status: you said 'use your best judgment,' so I did, and I would like
//   to formally apologize for my best judgment.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Weekly status: you said 'use your best judgment,' so I did, and I would like to formally apologize for my best judgment.";

// Output directory: /output by default (the grader sandbox); OUTPUT_DIR lets a
// local clean-room run redirect it without touching the entry itself.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
