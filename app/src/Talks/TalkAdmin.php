<?php

namespace HSC\Talks;

use SilverStripe\Admin\ModelAdmin;

class TalkAdmin extends ModelAdmin {

    private static $menu_title = 'Talks';

    private static $url_segment = 'talks';

    private static $managed_models = [
        Talk::class,
        Author::class,
        Series::class
    ];
}