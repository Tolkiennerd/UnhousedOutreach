# syntax=docker/dockerfile:1

FROM node:21-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000

