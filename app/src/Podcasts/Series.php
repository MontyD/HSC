<?php

namespace HSC\Podcasts;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Assets\Image;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\ORM\Connect\MySQLSchemaManager;

class Series extends DataObject implements ScaffoldingProvider {

    private static $table_name = 'Series';
    private static $plural_name = 'Series';

    private static $create_table_options = [
        MySQLSchemaManager::ID => 'ENGINE=MyISAM'
    ];

    private static $has_many = ['podcasts' => Podcast::class];
    

    private static $has_one = ['image' => Image::class];
    private static $owns = ['image'];

    private static $db = [
        'name' => 'Varchar',
        'description' => 'Varchar'
    ];

    private static $indexes = [
        'SearchFields' => [
            'type' => 'fulltext',
            'columns' => ['name']
        ]
    ];

    private static $summary_fields = [
        'name' => 'Name',
        'Created' => 'Created'
    ];

    public function canView($member = null, $context = []) {
        return true;
    }

    public function getCMSFields() {
        $fields = FieldList::create(
            TextField::create('name', 'Name'),
            TextareaField::create('description', 'Description'),
            UploadField::create('image', 'Image')
        );
        return $fields;
    }

    public function getCMSValidator() {
		return new RequiredFields(['name', 'description']);
    }
    
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder) {
        $scaffolder
            ->type(Series::class)
                ->addFields(['name', 'description', 'image'])
                ->operation(SchemaScaffolder::READ)
                    ->setUsePagination(true)
                    ->end()
                ->end()
            ->type(Image::class)
                ->addFields(['url'])
                ->end();

        return $scaffolder;
    }

}