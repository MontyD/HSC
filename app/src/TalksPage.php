<?php

namespace HSC;

use Page;

class TalksPage extends Page {
    private static $db = [];

    private static $has_one = [];

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Main', 'Content');
        return $fields;
    }
}
