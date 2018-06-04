<?php

namespace HSC;

use PageController;

class TalksPageController extends PageController {
    private static $allowed_actions = [];

    public function init() {
      parent::init();
      Requirements::themedJavascript('talks');
    }
}
