FROM node:18-alpine as base
RUN mkdir /app
WORKDIR /app
COPY package.json .

FROM base as pre-prod
COPY . .
RUN npm install --frozen-lockfile
RUN npm run build

FROM node:18-alpine as prod
RUN mkdir /app
WORKDIR /app
RUN npm i sharp
COPY --from=pre-prod /app/public ./public
COPY --from=pre-prod /app/.next ./.next
COPY --from=pre-prod /app/node_modules ./node_modules

RUN apk update && apk upgrade --no-cache
RUN apk --no-cache add curl && \
    rm -rf /var/cache/apk/*

HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:3000 || exit 1

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]