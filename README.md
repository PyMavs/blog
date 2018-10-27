# PyMavs Blog

<https://pymavs.github.io/blog/>

add new blog in `src/pages/` by creating new folders and putting all the markdown, imgages, etc files related to that page in the folder

Each markdown file must contain at the start:

```markdown
---
title: SomeTitle
date: "SomeDate (format: yyyy-mm-dd)"
---
```

Preview your edits using `gatsby develop`.

Depoly the website using `./deployBlog.sh "your message"` where `your message` is your commit message.
