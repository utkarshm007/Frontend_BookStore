FROM node:16
 
# Set the working directory in the container
WORKDIR /usr/src/app
 
# Copy package.json and package-lock.json if present
COPY package*.json ./
 
# Install dependencies
RUN npm install --legacy-peer-deps
 
# Bundle app source
COPY . .
 
# Expose port 3000 to the outside world
EXPOSE 3000
 
# Command to run the application
CMD ["npm", "start"]
