
# backend/Dockerfile
FROM node:20-alpine

# Create the app directory
WORKDIR /app

# Install dependencies (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install

# Coupy source
COPY . .

# Setup env (can be overriden by docker-compose)
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["npm", "run", "start"]