<?php

namespace HSC\Talks;

use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Environment;
use SilverStripe\GraphQL\Auth\AuthenticatorInterface;
use SilverStripe\Security\Member;
use SilverStripe\ORM\ValidationException;
use SilverStripe\Security\BasicAuth;

class Authenticator implements AuthenticatorInterface {

    private $username;
    private $password;
    private $usernameHeaderField = 'PHP_AUTH_USER';
    private $passwordHeaderField = 'PHP_AUTH_PW';
    private $failureMessage = 'Cannot authenticate graphql endpoint - check env';

    function __construct() {
        $this->username = Environment::getEnv('GRAPH_QL_USERNAME');
        $this->password = Environment::getEnv('GRAPH_QL_PASSWORD');
    }

   /**
    * @param  HTTPRequest $request The current HTTP request
    * @return Member               If authentication is successful
    * @throws ValidationException  If authentication fails
    */
   public function authenticate(HTTPRequest $request) {
        try {
            $request->addHeader($this->usernameHeaderField, $this->username);
            $request->addHeader($this->passwordHeaderField, $this->password);

            $authResponse =  BasicAuth::requireLogin($request, $this->failureMessage);

            if (!$authResponse instanceof Member) {
                throw new ValidationException($this->failureMessage, 401);
            }

            return $authResponse;
        } catch (HTTPResponse_Exception $ex) {
            $failureMessage = (string) $ex->getResponse()->getBody();
            throw new ValidationException($this->failureMessage, 401);
        }
   }

   /**
    * Determine if this authenticator is applicable to the current request
    * by checking that we have a username and password set in env
    * @param HTTPRequest $request
    * @return bool
    */
   public function isApplicable(HTTPRequest $request) {
        return isset($this->username) && trim($this->username) !== '' && isset($this->password) && trim($this->password) !== '';
   }
}