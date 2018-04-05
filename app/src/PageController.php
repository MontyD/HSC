<?php

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\View\Requirements;

class PageController extends ContentController {
    private static $allowed_actions = [];

    protected function init() {
        parent::init();
        Requirements::css('https://fonts.googleapis.com/css?family=Roboto');
        Requirements::themedCSS('app');
        Requirements::themedJavascript('app');
        Requirements::javascript('https://use.fontawesome.com/releases/v5.0.9/js/all.js', [
            "async" => true,
            "defer" => true
        ]);
    }
}
