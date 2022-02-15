FROM node:lts-alpine
ENV NODE_ENV development
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package.json ./
COPY . .
USER node
RUN npm install
COPY --chown=node:node . ./
EXPOSE 8080
CMD ["node", "server.js"]
