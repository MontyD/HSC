<?php

namespace HSC;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Versioned\Versioned;

class HeaderImage extends DataObject {

    private static $table_name = 'HeaderImage';
    
    private static $has_one = [
        'img' => Image::class,
        'homePage' => HomePage::class
    ];

    private static $owns = [
        'img',
    ];

    private static $extensions = [
        Versioned::class,
    ];

    private static $summary_fields = [
        'GridThumbnail' => ''
    ];

    public function getGridThumbnail() {
        if($this->img()->exists()) {
            return $this->img()->ScaleWidth(100);
        }
        return 'No image uploaded';
    }

    public function getCMSFields() {
        $uploader = UploadField::create('img', Image::class);
        $uploader->setFolderName('header-images');
        $uploader->getValidator()->setAllowedExtensions(['png','jpeg','jpg']);

        return FieldList::create($uploader);
    }
}