FROM node:8.11.2
run npm i npm@6 -g

ENV HOST 0.0.0.0
ENV PORT 80

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build
# Expose the app port
EXPOSE 80

CMD ["npm", "start"]