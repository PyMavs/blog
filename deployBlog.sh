#!/bin/bash
echo "deploying...\n\n"
npm run deploy


echo "changing master...\n\n"
git add .
git commit -m $1
git push origin master