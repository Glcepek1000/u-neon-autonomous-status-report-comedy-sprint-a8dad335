#!/bin/sh
# Status Report Comedy Sprint — one-shot setup.
# No dependencies to install (Node stdlib only). Just verifies the runtime.
set -e
node --version
node main.ts
echo "entry written to /output/entry.txt (or \$OUTPUT_DIR/entry.txt)"
