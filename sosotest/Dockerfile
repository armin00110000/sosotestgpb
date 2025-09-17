# Node.js mit minimalem Linux als Basis
FROM node:18-bullseye
# Arbeitsverzeichnis im Container
WORKDIR /app
# Package-Dateien zuerst kopieren und Dependencies installieren
COPY package*.json ./

#RUN apk add --no-cache python3 make g++ libc6-compat

RUN npm install
# Restlichen Code kopieren
COPY . .
# Build erzeugen
RUN npm run build
# Startkommando
CMD ["npm", "start"]
# Port öffnen
EXPOSE 3000
