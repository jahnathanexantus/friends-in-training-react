# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy wait-for-it.sh script
COPY wait-for-it.sh .

# Copy the rest of the application code
COPY . .

# Ensure wait-for-it.sh is executable
RUN chmod +x wait-for-it.sh

# Expose the port the server runs on
EXPOSE 3001

# Command to run the application
CMD ["./wait-for-it.sh", "mysql:3306", "--", "npm", "start"]
