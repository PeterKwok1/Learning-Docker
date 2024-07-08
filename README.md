# Learning Docker

## Tickets
- 

## Resources
- https://www.youtube.com/watch?v=9zUHg7xjIqQ - https://youtu.be/9zUHg7xjIqQ?t=4804

## Notes
- ```docker run -v "$(pwd -W)":/app:ro -v //app/node_modules --env-file .env -p 3000:3000 -d --name node_app node_app_image``` 
    - ```EXPOSE``` only serves as documentation. ```-p``` publishes the port. 
    - ```-v``` can produce bind mounts or volumes.
    - ```ro``` = read only.
    - ```env-file``` = path to env file.
    - "A pathname consisting of a single slash shall resolve to the root directory of the process ... A pathname that begins with two successive slashes may be interpreted in an implementation-defined manner," which today seems to mean hostname. 
- ```docker compose up -d --build```
    - ```-d``` = detached mode 
    - ```--build``` = force build in case dockerfile has been updated. 
- ```docker compose down```
- ```nodemon --legacy-watch index.js```
    - ```node --watch index.js``` + ```nodemon index.js``` don't work with docker bind mounts or volumes due to the way file changes are mirrored
