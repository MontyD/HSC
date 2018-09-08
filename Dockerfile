FROM nanoninja/php-fpm

LABEL maintainer="Monty Dawson <hello@montydawson.co.uk>"

WORKDIR /var/HSC

RUN curl --silent --show-error https://getcomposer.org/installer | php

COPY ./ /var/HSC
COPY ./site.conf /etc/nginx/conf.d/default.conf

RUN php composer.phar require silverstripe/s3 --quiet

ENV PHP__opcache.enable='On' \
    PHP__date.timezone='"Europe/London"' \
    PHP__pm.max_children='10'