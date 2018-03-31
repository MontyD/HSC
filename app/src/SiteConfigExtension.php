<?php

namespace HSC;

use SilverStripe\ORM\DataExtension;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;

class SiteConfigExtension extends DataExtension {

  private static $db = array(
    'primaryContactPerson' => 'Text',
    'primaryContactPersonPhone' => 'Text',
    'address' => 'Text',
    'emailAddress' => 'Text',
    'copyrightInfo' => 'Text',
    'charityInfo' => 'Text'
  );

  public function updateCMSFields(FieldList $fields) {
    $fields->addFieldToTab('Root.Main', TextField::create('primaryContactPerson', 'Primary contact person'));
    $fields->addFieldToTab('Root.Main', TextField::create('primaryContactPersonPhone', 'Primary contact person phone number'));
    $fields->addFieldToTab('Root.Main', TextareaField::create('address', 'Address'));
    $fields->addFieldToTab('Root.Main', TextField::create('emailAddress', 'Primary Email'));
    $fields->addFieldToTab("Root.Main", TextField::create('copyrightInfo', 'Copyright Info'));
    $fields->addFieldToTab("Root.Main", TextField::create('charityInfo', 'Charity Info'));
  }

}
