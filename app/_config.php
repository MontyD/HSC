<?php

use SilverStripe\Security\PasswordValidator;
use SilverStripe\Security\Member;

$validator = new PasswordValidator();

$validator->minLength(8);
$validator->checkHistoricalPasswords(6);
Member::set_password_validator($validator);
