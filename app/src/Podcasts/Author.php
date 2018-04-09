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

class Author extends DataObject implements ScaffoldingProvider {

    private static $table_name = 'Author';

    private static $create_table_options = [
        MySQLSchemaManager::ID => 'ENGINE=MyISAM'
    ];

    private static $has_many = ['podcasts' => Podcast::class];   

    private static $has_one = array(
        'image' => Image::class
    );

    public function canView($member = null, $context = []) {
        return true;
    }

    private static $db = array(
        'name' => 'Varchar',
        'description' => 'Varchar'
    );

    private static $indexes = array(
        'SearchFields' => array(
            'type' => 'fulltext',
            'columns' => ['name']
        )
    );

    private static $summary_fields = array(
        'name' => 'Name',
        'Created' => 'Created'
    );

    public function getCMSFields() {
        $fields = FieldList::create(
            TextField::create('name', 'Name'),
            TextareaField::create('description', 'Description'),
            UploadField::create('image', 'Image')
        );
        return $fields;
    }

    public function getCMSValidator() {
		return new RequiredFields(array('name', 'description'));
    }

    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder) {
        $scaffolder
            ->type(Author::class)
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