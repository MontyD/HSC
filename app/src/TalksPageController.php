<?php

namespace HSC;

use PageController;

class TalksPageController extends PageController {

    private static $allowed_actions = [];

    public function init() {
      parent::init();
      Requirements::javascript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDeK6LmQ6RljdxyUWMnzfob-dsqIrrxHZ4');
    }
}
