<?php 

namespace HSC;

use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\Connect\MySQLSchemaManager;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;


class Service extends DataObject {

    private static $table_name = 'Service';

    private static $has_one = ['Photo' => Image::class];

    private static $db = [
        'name' => 'Varchar',
        'time' => 'Varchar',
        'shortDescription' => 'Text',
        'description' => 'HTMLText'
    ];

    private static $summary_fields = [
        'name' => 'Name',
        'time' => 'Time'
    ];

    public function getCMSFields() {
        $fields = FieldList::create(
            TextField::create('name', 'Name'),
            TextField::create('time', 'Time'),
            TextareaField::create('shortDescription', 'Short Description'),
            UploadField::create('Photo', 'Image'),
            new HTMLEditorField('description', 'Description')
        );
        return $fields;
    }

    public function getCMSValidator() {
		return new RequiredFields(['name', 'time', 'shortDescription', 'description']);
	}

}