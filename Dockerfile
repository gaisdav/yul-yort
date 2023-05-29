FROM node:16.13.0

# ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD ["npm", "start"]