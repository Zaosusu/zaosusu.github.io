import re

with open('src/pages/Home.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

# Find the line numbers for key markers
for i, line in enumerate(lines):
    if 'grid-cols-1 md:grid-cols-3 gap-6' in line:
        print(f"Grid at line {i+1}: {line.strip()}")
    if 'threadSteps.map' in line:
        print(f"threadSteps at line {i+1}: {line.strip()}")
    if '{c.threadDesc}' in line:
        print(f"threadDesc at line {i+1}: {line.strip()}")
