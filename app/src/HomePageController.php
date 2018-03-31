<?php

namespace HSC;

use SilverStripe\View\Requirements;
use PageController;

class HomePageController extends PageController {

    private static $allowed_actions = array();

    public function init() {
      parent::init();
      Requirements::javascript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDeK6LmQ6RljdxyUWMnzfob-dsqIrrxHZ4');
    }
}
