<nav class="navbar">
    <div class="navbar-brand">
        <a class="navbar-item" href="$AbsoluteBaseUrl" title="Home">
            <img src="/img/HSC-logo.svg" class="nav-logo" />
            $SiteConfig.Title
        </a>
        <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="nav-right navbar-menu">
        <% loop $Menu(1) %>
            <% if $Last %>
                <div class="navbar-item">
                    <div class="field">
                        <p class="control">
                            <a href="$Link" title="$Title" class="button is-success">$MenuTitle</a>
                        </p>
                    </div>
                </div>
            <% else %>
                <a href="$Link" title="$Title" class="$LinkingMode navbar-item">$MenuTitle</a>
            <% end_if %>
        <% end_loop %>
    </div>
</nav>
