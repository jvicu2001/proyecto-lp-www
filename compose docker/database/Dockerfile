# Use an official MongoDB image as the base image
FROM mongo:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the MongoDB configuration file to the container
COPY mongod.conf /etc/mongod.conf

# Expose the default MongoDB port
EXPOSE 27017

# Start the MongoDB server when the container launches
CMD ["mongod", "--config", "/etc/mongod.conf"]


