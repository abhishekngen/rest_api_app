FROM node:22.12.0 AS builder

WORKDIR /app

COPY package*.json .

RUN npm install # Need typescript dev dependency to build

COPY . .

RUN npm run build

FROM node:22.12.0 AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist

COPY package*.json ./

RUN npm install --omit=dev # production build

ENV PORT=3000

EXPOSE 3000
# Note that, this doesn't actually do anything. When you use -p, the port you set will be exposed irrespective of this - this is more for metadata/human understanding

CMD ["node", "dist/app.js"]

LABEL authors="Abhishek Manikandan"
