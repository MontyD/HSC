<?php

namespace HSC;

use Page;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class HomePage extends Page {

    private static $table_name = 'HomePage';

    private static $has_many = ['headerImages' => HeaderImage::class];

    private static $has_one = ['secondSectionImage' => Image::class];

    public function getCMSFields() {
      $uploader = UploadField::create('secondSectionImage', 'Visit us image');
      $uploader->getValidator()->setAllowedExtensions(['png','jpeg','jpg']);

      $fields = parent::getCMSFields();
      $fields->removeFieldFromTab('Root.Main', 'Content');
      $fields->addFieldsToTab('Root.Main', [
        TextField::create('titleOne', 'Section one title'),
        TextareaField::create('infoOne', 'Section one info'),
        TextareaField::create('infoTwo', 'Section one mission statement'),
        TextField::create('linkLocation', 'First button link location'),
        TextField::create('linkText', 'First button text'),
        TextField::create('highlightedLinkLocation', 'Second button link location'),
        TextField::create('highlightedLinkText', 'Second button text'),
        TextField::create('eventsTitle', 'Events title'),
        TextareaField::create('eventsText', 'Events description'),
        $uploader,
        TextField::create('visitUsTitle', 'Visit us title'),
        TextField::create('visitUsSubtitle', 'Visit us subtitle')
      ], 'Metadata');

      $fields->addFieldToTab('Root.HeaderImages', GridField::create(
        'HeaderImages',
        'Header Images',
        $this->headerImages(),
        GridFieldConfig_RecordEditor::create()
      ));

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
      'eventsTitle' => 'Varchar',
      'eventsText' => 'Text',
      'visitUsTitle' => 'Varchar',
      'visitUsSubtitle' => 'Text'
    );

}
