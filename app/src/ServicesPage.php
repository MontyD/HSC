<?php

namespace HSC;

use Page;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class ServicesPage extends Page {

    private static $table_name = 'ServicesPage';

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Main', 'Content');
        $fields->addFieldsToTab('Root.Main', [
          TextField::create('mainTitle', 'Main title'),
          TextareaField::create('description', 'Description'),
          TextField::create('findOutMoreTitle', 'Find out more title'),
          TextareaField::create('findOutMoreText', 'Find out more text'),
          TextField::create('linkLocation', 'First button link location'),
          TextField::create('linkText', 'First button text'),
          TextField::create('highlightedLinkLocation', 'Second button link location'),
          TextField::create('highlightedLinkText', 'Second button text')
        ], 'Metadata');
      return $fields;
    }

    private static $db = array(
      'mainTitle' => 'Varchar',
      'description' => 'Text',
      'findOutMoreTitle' => 'Varchar',
      'findOutMoreText' => 'Text',
      'linkLocation' => 'Varchar',
      'linkText' => 'Varchar',
      'highlightedLinkLocation' => 'Varchar',
      'highlightedLinkText' => 'Varchar'
    );

}
