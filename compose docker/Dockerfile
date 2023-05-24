FROM ubuntu:latest

# Instalar dependencias del sistema operativo
RUN apt-get update && \
    apt-get install -y curl gnupg

# Instalar Node.js y npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Instalar PostgreSQL
RUN apt-get install -y postgresql

# Instalar Express.js, Vue.js y otras dependencias
RUN npm install -g express vue


# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias de la aplicación
RUN npm install

# Exponer el puerto 3000 para Express.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]