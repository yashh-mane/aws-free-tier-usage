FROM node:21-alpine

WORKDIR /src/app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

RUN npm install express

RUN npm install dotenv

RUN npm install child_process

# Copy the rest of your application
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
