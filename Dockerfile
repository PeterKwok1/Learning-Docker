FROM node:20
WORKDIR /app
COPY package.json . 

# embedded bash script to separate production and dev dependencies
# ARG <- docker-compose file 
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \ 
    then npm install; \
    else npm install --only=production; \
    fi

COPY . .
EXPOSE 3000
CMD ["node", "index.js"]