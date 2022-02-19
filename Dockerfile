FROM node:17-alpine3.14
ENV NODE_ENV development
RUN mkdir -p /home/node/remind && chown -R node:node /home/node/remind
WORKDIR /home/node/remind
COPY --chown=node:node package.json ./
COPY . .
USER node
RUN npm install
COPY --chown=node:node . ./
EXPOSE 8080
CMD ["npm", "run", "dev"]