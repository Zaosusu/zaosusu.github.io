import re

with open('src/pages/Home.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix unnecessary escapes inside double-quoted strings
content = content.replace("\\'this is me.\\'", "'this is me.'")

with open('src/pages/Home.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('done')
