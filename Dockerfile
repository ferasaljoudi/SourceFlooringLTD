# Build frontend
FROM node:18 AS frontend-build
WORKDIR /app/sourceflooring
COPY ./sourceflooring/package*.json ./
RUN npm install
COPY ./sourceflooring ./
RUN npm run build

# Setup backend
FROM node:18 AS backend
WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm install
COPY ./server ./
COPY --from=frontend-build /app/sourceflooring/build ./dist

# Run backend with frontend
EXPOSE 93
CMD ["node", "index.js"]
