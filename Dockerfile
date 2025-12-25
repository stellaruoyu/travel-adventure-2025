# Build stage
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Expose port (PORT will be set at runtime)
EXPOSE 8000

# Start application using PORT environment variable
# "serve" -s (single page app) dist (folder) -p (port)
CMD sh -c "serve -s dist -p \${PORT:-8000}"
