# Use a Node.js base image for development
FROM node:16.14.2 as build

# Set the working directory inside the container
WORKDIR /client

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client application code to the container
COPY . .

# Expose port 3000 for the development server
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "start"]
# CMD ["/bin/bash"]
