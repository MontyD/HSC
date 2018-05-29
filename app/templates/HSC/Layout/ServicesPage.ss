<section class="section gradient">
    <article class="container">
        <% loop services() %>
            <div class="card emphasis has-vertical-margin">
                <div class="card-content $EvenOdd">
                        <div class="content">
                            <h2 id="$name">$name</h2>
                            <p class="description is-marginless">$shortDescription</p>
                            <p class="date has-text-right has-text-grey">$time</p>
                            $description
                        </div>
                </div>
            </div>
        <% end_loop %>
    </article>
</section>