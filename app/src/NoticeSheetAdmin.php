<?php

namespace HSC;

use SilverStripe\Admin\ModelAdmin;

class NoticeSheetAdmin extends ModelAdmin {

    private static $menu_title = 'Notice Sheets';

    private static $url_segment = 'notice-sheets';

    private static $managed_models = [
        NoticeSheet::class
    ];
}