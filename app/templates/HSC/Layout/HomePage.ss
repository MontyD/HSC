
<section class="hero contains-overlay is-medium is-light">
    <div class="is-overlay image-slider" id="homepage-image-slider">
        <div data-img-large="/img/test-image.jpg"
             data-img-medium="/img/test-image.jpg"
             data-img-small="/img/test-image.jpg">
        </div>
        <div data-img-large="/img/test-image-2.jpg"
             data-img-medium="/img/test-image-2.jpg"
             data-img-small="/img/test-image-2.jpg">
        </div>
    </div>
    <div class="hero-body container">
        <div class="main-logo-container">
            <img src="/img/HSC-logo.svg" class="main-logo" />
            <h1 class="main-logo-title has-white-shadow">$SiteConfig.Title</h1>
        </div>
        <h2 class="subtitle has-white-shadow">
            $SiteConfig.Tagline
        </h2>
    </div>
</section>
<section class="section">
    <article class="container">
        <div class="columns">
            <div class="column is-two-thirds has-vertically-aligned-content">
                <div class="card emphasis">
                    <div class="card-content">
                        <h2 class="subtitle is-3 has-text-grey">$titleOne</h2>
                        <div class="content">
                            <p>$infoOne</p>
                            <p class="has-text-black-bis">
                                <i>$infoTwo</i>
                            </p>
                            <div class="has-text-centered">
                                <a href="$linkLocation" title="$linkText" class="button is-primary">$linkText</a>
                                <a href="$highlightedLinkLocation" title="$highlightedLinkText" class="button is-success">$highlightedLinkText</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <h4 class="subtitle is-4 has-text-right">Upcoming Events</h4>
                        <% loop upcomingEvents() %>
                            <div class="content">
                                <a title="$Event.Title" href="$Link">$Event.Title</a>
                                <p class="is-marginless has-text-justified">$Event.shortDescription.Summary(12, 5)</p>
                                <p class="has-text-right has-text-grey">
                                    $DateRange
                                    <% if AllDay %>
                                        All Day
                                    <% else %>
                                        <% if StartTime %>
                                            $TimeRange
                                        <% end_if %>
                                    <% end_if %>
                                </p>
                            </div>
                        <% end_loop %>
                        <div class="has-text-centered">
                            <a href="#" title="Notice sheet" class="button is-primary">Notice sheet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</section>
<section class="section">
    <div class="image-slice">
        <div class="image" style="background-image: url(/img/worship.jpg)"></div>
        <div class="slice"></div>
    </div>
    <article class="container is-light">
        <div class="columns">
            <div class="column">
                <h2 class="title has-text-grey">$visitUsTitle</h2>
                <h4 class="subtitle">$visitUsSubtitle</h4>
            </div>
        </div>
        <div class="columns">
            <div class="column has-vertically-aligned-content">
                <div class="card emphasis">
                    <div class="card-content">
                        <% loop services() %>
                            <div class="content">
                                <a title="$Title" href="$Link">$Title</a>
                                <p class="description is-marginless">$shortDescription</p>
                                <p class="date has-text-right has-text-grey">$parsedDate</p>
                            </div>
                        <% end_loop %>
                    </div>
                </div>
            </div>
            <div class="column is-two-thirds has-vertically-aligned-content">
                <h3 class="subtitle is-3 is-marginless">How to find us</h3>
                <p>$SiteConfig.address</p>
                <div id="map" class="google-map"></div>
            </div>
        </div>
    </article>
</section>
