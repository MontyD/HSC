<section class="section gradient">
    <div class="container">
        <h1 class="title is-1 has-white-shadow">$mainTitle</h1>
        <p class="title is-5">$description</p>
        <% loop $services %>
            <article class="card emphasis has-top-margin">
                <div class="card-content $EvenOdd">
                        <h2 id="$name" class="title is-3 has-subtle-bottom-border is-clearfix">
                            $name
                            <span class="has-text-grey is-pulled-right is-size-4">$time</span>
                        </h2>
                        
                        <p class="description has-vertical-margin is-important-text">$shortDescription</p>
                        <div class="columns has-vertical-margin">
                            <div class="column is-two-thirds content has-vertically-aligned-content">
                                $description
                            </div>
                            <div class="column has-vertically-aligned-content">
                                <figure class="image">
                                    <img src="$Photo.ScaleWidth(500).URL" alt="$name" />
                                </figure>
                            </div>
                        </div>
                </div>
            </article>
        <% end_loop %>
        <article class="has-top-margin">
            <h3 class="title is-3 has-text-centered has-text-grey has-top-margin">
                $findOutMoreTitle
            </h3>
            <p class="has-text-centered">
                $findOutMoreText
            </p>
            <div class="has-text-centered has-top-margin">
                <a href="$linkLocation" title="$linkText" class="button is-primary">$linkText</a>
                <a href="$highlightedLinkLocation" title="$highlightedLinkText" class="button is-success">$highlightedLinkText</a>
            </div>
        </article>
    </div>
</section>