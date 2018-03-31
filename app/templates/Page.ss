<!DOCTYPE html>
<html lang="en">
	<head>
		<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> | $SiteConfig.Title</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	    <% base_tag %>
	    $MetaTags(false)
	</head>
	<body>
		<% include Nav %>
		$Layout
		<% include Footer %>
	</body>
</html>
