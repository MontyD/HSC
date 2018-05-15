<section class="section dark-gradient">
    <article class="container">
        <div class="card emphasis">
            <div class="card-content">
                <% loop services() %>
                    <div class="content">
                        <a title="$name" href="/services">$name</a>
                        <p class="description is-marginless">$shortDescription</p>
                        <p class="date has-text-right has-text-grey">$time</p>
                        $description
                    </div>
                <% end_loop %>
            </div>
        </div>
    </article>
</section>