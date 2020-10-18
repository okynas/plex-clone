# pull official base image
FROM node:latest

# set working directory
WORKDIR /front

# add `/app/node_modules/.bin` to $PATH
ENV PATH /front/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"] 