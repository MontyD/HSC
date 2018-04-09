<?php

namespace HSC\Podcasts;

use SilverStripe\Admin\ModelAdmin;

class PodcastAdmin extends ModelAdmin {

    private static $menu_title = 'Podcasts';

    private static $url_segment = 'podcasts';

    private static $managed_models = [
        Podcast::class,
        Author::class,
        Series::class
    ];
}