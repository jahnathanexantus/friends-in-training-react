# Use a Node.js base image
FROM node:19-alpine

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the server will run on
EXPOSE 3001

# Define the command to run the server
CMD ["npm", "start"]
