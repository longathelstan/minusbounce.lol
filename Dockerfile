FROM node:20-slim
WORKDIR /app

COPY package.json ./
RUN npm install -g pnpm
RUN pnpm i
COPY . ./
RUN pnpm build

VOLUME /app/node_modules /app/.svelte-kit

EXPOSE 4173
CMD [ "pnpm", "preview", "--host" ]
