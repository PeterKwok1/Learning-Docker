# Learning Docker

## Tickets
- Fix volume bug 
- Retrace steps
- https://www.baeldung.com/ops/docker-exclude-sub-folder-when-adding-volume
- https://forums.docker.com/t/fail-to-setup-read-only-bind-mount-and-anonymous-volume/139766

## Resources
- https://www.youtube.com/watch?v=9zUHg7xjIqQ - https://youtu.be/9zUHg7xjIqQ?t=3058

## Notes
- ```docker run -v "$(pwd -W)":/app -v //app/node_modules -p 3000:3000 -d --name node_app node_app_image``` 
    - ```-v``` can produce bind mounts or volumes. 
    - "A pathname consisting of a single slash shall resolve to the root directory of the process ... A pathname that begins with two successive slashes may be interpreted in an implementation-defined manner," which today seems to mean hostname. 
- ```nodemon --legacy-watch index.js```
    - ```node --watch index.js``` + ```nodemon index.js``` don't work with docker bind mounts or volumes due to the way file changes are mirrored
