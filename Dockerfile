FROM nanoninja/php-fpm

LABEL maintainer="Monty Dawson <hello@montydawson.co.uk>"

WORKDIR /var/HSC
COPY ./ /var/HSC

RUN apt-get update --assume-yes -qq && \
    apt-get install unzip git -qq
RUN curl --silent --show-error https://getcomposer.org/installer | php

RUN php composer.phar self-update --quiet && \
    php composer.phar install --quiet

ENV PHP__opcache.enable='On' \
    PHP__date.timezone='"Europe/London"' \
    PHP__pm.max_children='10'