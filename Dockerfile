FROM node:18.17.1 

WORKDIR /front

EXPOSE 4200 

COPY package*.json ./
COPY angular.json angular.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.spec.json tsconfig.spec.json

COPY src src

RUN npm install -g @angular/cli
RUN npm install

CMD ng serve --host 0.0.0.0
