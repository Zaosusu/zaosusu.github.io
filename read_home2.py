import re

with open('src/pages/Home.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

# Find all card links to identify which cards are in which section
print("=== Card links in projects section ===")
for i in range(318, 500):
    if i < len(lines):
        line = lines[i]
        if 'to="/' in line:
            # get context
            ctx = []
            for j in range(max(0,i-2), min(len(lines), i+5)):
                ctx.append(f"{j+1}: {lines[j]}")
            print('\n'.join(ctx))
            print('---')
