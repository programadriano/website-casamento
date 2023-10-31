# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application source code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose a port (if your Next.js application uses one)
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]