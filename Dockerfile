FROM nginx:alpine

ADD ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html
