
<section class="hero contains-overlay is-medium is-light">
    <div class="is-overlay image-slider" id="homepage-image-slider">
        <% loop $headerImages %>
            <img srcset="$img.ScaleWidth(400).URL 400w, $img.ScaleWidth(700).URL 700w, $img.ScaleWidth(1200).URL 1000w"
                sizes="(max-width: 400px) 100%, (max-width: 700px) 100%, 1200px 100%"
                src="$img.ScaleWidth(1200).URL" alt="">
        <% end_loop %>
    </div>
    <div class="hero-body container">
        <div class="main-logo__container">
            <img src="/img/HSC-logo.svg" class="main-logo__img" />
            <h1 class="main-logo__title">$SiteConfig.Title</h1>
        </div>
        <h2 class="subtitle has-white-shadow main-logo__subtitle">
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
            <div class="column has-vertically-aligned-content">
                <div class="card">
                    <div class="card-header">
                        <p class="card-header-title">
                            $eventsTitle
                        </p>
                        <span class="card-header-icon">
                            <span class="icon">
                                <i class="far fa-calendar-alt has-text-primary"></i>
                            </span>
                        </span>
                    </div>
                    <div class="card-content has-text-grey">$eventsText</div>
                    <% if $noticeSheet %>
                        <div class="card-footer">
                            <a href="$noticeSheet.file.getAbsoluteURL()" title="Notice sheet" class="card-footer-item">
                                Notice sheet for week starting $noticeSheet.weekStarting.Nice
                            </a>
                        </div>
                    <% end_if %>
                </div>
            </div>
        </div>
    </article>
</section>
<section class="section">
    <div class="image-slice">
        <div class="image" style="background-image: url($secondSectionImage.ScaleWidth(1200).URL)"></div>
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
                                <a title="$name" href="/services">$name</a>
                                <p class="description is-marginless">$shortDescription</p>
                                <p class="date has-text-right has-text-grey">$time</p>
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
