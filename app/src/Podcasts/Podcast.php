<?php

namespace HSC\Podcasts;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Assets\File;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;

class Podcast extends DataObject implements ScaffoldingProvider {

    private static $table_name = 'Podcast';

    private static $has_one = array(
        'audioFile' => File::class
    );

    private static $db = array(
        'name' => 'Varchar',
        'description' => 'Text'
    );

    private static $summary_fields = array(
        'name' => 'Name',
        'Created' => 'Created'
    );

    public function canView($member = null, $context = []) {
        return true;
    }

    public function getCMSFields() {
        // $series_source = Series::get()->map('ID', 'name', 'Select Series');
        // $author_source = Author::get()->map('ID', 'name', 'Select Author');
        $fields = FieldList::create(
            TextField::create('name', 'Name'),
            TextareaField::create('description', 'Description'),
            // $authorDropdown = new DropdownField('authorID', 'Author', $author_source),
            // $seriesDropdown = new DropdownField('seriesID', 'Series', $series_source),
            $uploadField = new UploadField('audioFile', 'Audio File')
        );

        // $seriesDropdown->setHasEmptyDefault(true);
        // $authorDropdown->setHasEmptyDefault(true);
        $uploadField->setAllowedMaxFileNumber(1);
        $uploadField->setFolderName('podcasts');
        $uploadField->getValidator()->setAllowedExtensions(array('mp3'));

        // 100mb limit
        $uploadField->getValidator()->setAllowedMaxFileSize(100 * 1024 * 1024);

        return $fields;
    }

    public function getCMSValidator() {
		return new RequiredFields(array('description', 'name', 'audioFile'));
	}

    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder) {
        $scaffolder
            ->type(Podcast::class)
                ->addFields(['name', 'description', 'audioFile'])
                ->operation(SchemaScaffolder::READ)
                    ->setUsePagination(true)
                    ->end()
                ->end();

        return $scaffolder;
    }

}