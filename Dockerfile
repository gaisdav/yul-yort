FROM node:20.5.0

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

ENV PORT 3000

EXPOSE $3000

CMD ["npm", "start"]