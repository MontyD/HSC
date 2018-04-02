<?php

namespace HSC;

use SilverStripe\View\Requirements;
use PageController;

class HomePageController extends PageController {

    private static $allowed_actions = [];

    public function init() {
      parent::init();
      Requirements::javascript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDeK6LmQ6RljdxyUWMnzfob-dsqIrrxHZ4');
    }

    public function services() {
      return Service::get()->limit(2);
    }
}
