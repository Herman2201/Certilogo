FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm i
# copy all files
COPY . .
CMD ["npm", "run", "dev"]