<?php

namespace HSC\Podcasts;

use SilverStripe\Core\Environment;

class Authenticator {

    private $username;
    private $password;

    function __contruct() {
        $username = Environment::getEnv('GRAPH_QL_USERNAME');
        $password = Environment::getEnv('GRAPH_QL_PASSWORD');
        if (!$username || !$password) {
            throw new Error("Provide a username and password numb nuts");
        }
    }




}