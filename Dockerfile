FROM node:18.4.0-alpine
COPY . .
CMD ["npm", "start"]
