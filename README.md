# Learning Docker

## Resources
- https://www.youtube.com/watch?v=9zUHg7xjIqQ - https://youtu.be/9zUHg7xjIqQ?t=2728

## Notes
- ```docker run -v "$(pwd -W)":/app -p 3000:3000 -d --name node-app node-app-image``` = ```docker run -v "c:\desktop\me\other\comp sci\learning docker":/app -p 3000:3000 -d --name node-app node-app-image```
- ```nodemon --legacy-watch index.js```
    - ```node --watch index.js``` + ```nodemon index.js``` don't work with docker volumes due to the way file changes are handled