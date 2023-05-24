# Usamos una imagen base con Node.js y Vue CLI
FROM node:14

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos el package.json y el package-lock.json
COPY package*.json ./

# Instalamos las dependencias del cliente
RUN npm install

# Copiamos el código fuente del cliente
COPY . .

# Compilamos el cliente para producción
RUN npm run build

# Exponemos el puerto 8080 para el cliente
EXPOSE 8080

# Comando para iniciar el cliente
CMD [ "npm", "run", "serve" ]
