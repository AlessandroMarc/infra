FROM node:18-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY / ./

# Run the compiled JavaScript
CMD ["npm", "start"]

