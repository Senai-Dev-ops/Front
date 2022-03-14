FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install --save --silent
COPY . .
CMD ["npm", "start"]