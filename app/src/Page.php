<?php

use SilverStripe\CMS\Model\SiteTree;

class Page extends SiteTree {
    private static $db = [];

    private static $has_one = [];

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Main', 'Content');
        return $fields;
    }
}
