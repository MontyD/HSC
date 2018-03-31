<?php

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\View\Requirements;

class PageController extends ContentController {
    private static $allowed_actions = [];

    protected function init() {
        parent::init();
        Requirements::css('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
        Requirements::css('https://fonts.googleapis.com/css?family=Roboto');
        Requirements::themedCSS('app');
        Requirements::themedJavascript('app');
    }
}
