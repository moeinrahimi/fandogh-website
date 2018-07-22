FROM node:10.7.0

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