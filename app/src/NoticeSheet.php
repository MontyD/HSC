<?php

namespace HSC;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\File;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\DateField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Versioned\Versioned;
use SilverStripe\Forms\RequiredFields;

class NoticeSheet extends DataObject {

    private static $table_name = 'NoticeSheet';

    private static $db = ['weekStarting' => 'Date'];
    
    private static $has_one = [
        'file' => File::class
    ];

    private static $owns = [
        'file',
    ];

    private static $extensions = [
        Versioned::class
    ];

    private static $summary_fields = [
        'weekStarting' => 'Week Starting'
    ];

    public function getCMSFields() {
        $uploader = UploadField::create('file', 'File');
        $uploader->setFolderName('notice-sheets');
        $uploader->getValidator()->setAllowedExtensions(['pdf']);

        return FieldList::create(
            DateField::create('weekStarting', 'Week Starting'),
            $uploader
        );
    }

    public function getCMSValidator() {
		return new RequiredFields(['weekStarting', 'file']);
	}
}