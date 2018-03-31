<?php

namespace HSC;

use Page;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;


class HomePage extends Page {

    private static $table_name = 'HomePage';

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Main', 'Content');
        $fields->addFieldsToTab('Root.Main', array(
          TextField::create('titleOne', 'Section one title'),
          TextareaField::create('infoOne', 'Section one info'),
          TextareaField::create('infoTwo', 'Section one mission statement'),
          TextField::create('linkLocation', 'First button link location'),
          TextField::create('linkText', 'First button text'),
          TextField::create('highlightedLinkLocation', 'Second button link location'),
          TextField::create('highlightedLinkText', 'Second button text'),
          TextField::create('visitUsTitle', 'Visit us title'),
          TextField::create('visitUsSubtitle', 'Visit us subtitle')
        ), 'Metadata');

        return $fields;
    }

    private static $db = array(
      'titleOne' => 'Varchar',
      'infoOne' => 'Text',
      'infoTwo' => 'Text',
      'linkLocation' => 'Varchar',
      'linkText' => 'Varchar',
      'highlightedLinkLocation' => 'Varchar',
      'highlightedLinkText' => 'Varchar',
      'visitUsTitle' => 'Varchar',
      'visitUsSubtitle' => 'Text'
    );

}
