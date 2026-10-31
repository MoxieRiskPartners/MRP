#!/bin/bash
# Moxie brand color cleanup. Run from the project root (the MRP folder):
#   bash moxie-colors.sh
# Commit first (git add -A && git commit -m "before color cleanup") so you can undo.
set -e

FILES=$(grep -rlE "\[#[0-9a-fA-F]{6}\]|amber-[0-9]" src \
  --include=*.tsx --include=*.ts --include=*.jsx --include=*.js || true)

if [ -z "$FILES" ]; then
  echo "Nothing to change."
  exit 0
fi

# 1) Hard-coded gold hex values -> named gold scale (any prefix: text-, bg-, border-, hover:, from-, ring-...)
# 2) Tailwind amber-* (off-brand orange-yellow) -> gold-*
perl -pi -e '
  s/-\[#FBF5EB\]/-gold-50/gi;
  s/-\[#F0E2C8\]/-gold-100/gi;
  s/-\[#E5CFA5\]/-gold-200/gi;
  s/-\[#D9BC82\]/-gold-300/gi;
  s/-\[#D4B06B\]/-gold-400/gi;
  s/-\[#CC9F54\]/-gold-500/gi;
  s/-\[#B8893D\]/-gold-600/gi;
  s/-\[#A87A32\]/-gold-700/gi;
  s/-\[#9A7030\]/-gold-800/gi;
  s/-\[#8A652B\]/-gold-900/gi;
  s/-\[#8A6528\]/-gold-900/gi;
  s/\bamber-(50|100|200|300|400|500|600|700|800|900|950)\b/gold-$1/g;
' $FILES

echo "Updated $(echo "$FILES" | wc -l | tr -d ' ') files."
echo
echo "--- Still to fix by hand ---"
echo "bg-opacity (broken in Tailwind v4, change to slash syntax e.g. bg-black/50):"
grep -rn "bg-opacity" src || echo "  none"
echo
echo "Purple / pink / indigo (likely off-brand leftovers):"
grep -rnE "(purple|pink|indigo)-[0-9]" src || echo "  none"
