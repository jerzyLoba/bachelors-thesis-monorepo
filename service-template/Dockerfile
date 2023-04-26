FROM node:18-alpine

WORKDIR /proto

COPY proto .

WORKDIR /app

# COPY SERVICE_NAME .

RUN npm install --silent && npm run generate-types && npm run build

EXPOSE 50051

CMD ["npm", "run", "start"]