<?php

namespace HSC;

use PageController;

class ServicesPageController extends PageController {

    private static $allowed_actions = [];

    public function init() {
      parent::init();
    }

    public function services() {
      return Service::get();
    }
}
