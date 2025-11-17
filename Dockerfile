# Base image
FROM node:20-alpine3.21

# Setting work directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Building app
RUN npm run build
# Expose port 3000
EXPOSE 3000
# Start the server
CMD [ "npm", "run", "production"]
