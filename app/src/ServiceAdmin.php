<?php

namespace HSC;

use SilverStripe\Admin\ModelAdmin;

class PodcastAdmin extends ModelAdmin {

    private static $menu_title = 'Services';

    private static $url_segment = 'services';

    private static $managed_models = [
        Service::class
    ];
}