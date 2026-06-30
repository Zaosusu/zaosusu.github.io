import sys
content = open('src/pages/Home.tsx', 'r', encoding='utf-8').read()
lines = content.split('\n')
for i in range(318, 446):
    if i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if stripped:
            print(f"{i+1}: {line}")
