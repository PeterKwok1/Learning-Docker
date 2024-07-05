# Learning Docker

## Tickets
- Fix volume bug 
- Retrace steps
- https://www.baeldung.com/ops/docker-exclude-sub-folder-when-adding-volume
- https://forums.docker.com/t/fail-to-setup-read-only-bind-mount-and-anonymous-volume/139766

## Resources
- https://www.youtube.com/watch?v=9zUHg7xjIqQ - https://youtu.be/9zUHg7xjIqQ?t=3058

## Notes
- ```docker run -v "$(pwd -W)":/app -v /app/node_modules -p 3000:3000 -d --name node_app node_app_image``` 
    - ```"$(pwd -W)"``` = ```"c:\desktop\me\other\comp sci\learning docker"``` 
- ```nodemon --legacy-watch index.js```
    - ```node --watch index.js``` + ```nodemon index.js``` don't work with docker volumes due to the way file changes are handled



docker build -t test . 
docker run -v "$(pwd -W)":/app -v /app/node_modules -p 3000:3000 -d --name tc test

docker run --mount source=$(pwd -W),target=/app' -p 3000:3000 -d --name tc test
test absolute path string
-v can produce binds mounts, not volumes
https://docs.docker.com/storage/volumes/
type=volume
csv

