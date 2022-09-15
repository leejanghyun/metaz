## server App 도커 nodejs 로 작동하는 프로그램에 대한 공용 도커 입니다

FROM node:16 AS build

## 앱을 구분 합니다
ARG APP_NAME="discord-messaging-server"

WORKDIR /usr/src/app

COPY . .

RUN npm install --global pnpm
RUN pnpm install
RUN pnpm --filter @project-n/${APP_NAME} build

FROM node:16-alpine AS runner

WORKDIR /usr/src/app

ARG APP_NAME="discord-messaging-server"
ARG PROT=3000
ENV NODE_ENV=production
ENV PROT=${PROT}
ENV APP_NAME=${APP_NAME}

WORKDIR /usr/src/app

COPY . .

RUN npm install --global pnpm
RUN pnpm install --prod --ignore-scripts

COPY --from=build /usr/src/app/apps/${APP_NAME}/dist ./apps/${APP_NAME}/dist

EXPOSE ${PROT}

CMD pnpm --filter @project-n/${APP_NAME} start
