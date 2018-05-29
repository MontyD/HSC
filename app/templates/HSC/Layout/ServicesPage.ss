<section class="section gradient">
    <div class="container">
        <h1 class="title is-1 has-white-shadow">$mainTitle</h1>
        <p class="title is-5">$description</p>
        <% loop services() %>
            <article class="card emphasis has-vertical-margin">
                <div class="card-content $EvenOdd">
                        <div class="content">
                            <h2 id="$name">$name</h2>
                            <p class="description is-marginless">$shortDescription</p>
                            <p class="date has-text-right has-text-grey">$time</p>
                            $description
                        </div>
                </div>
            </article>
        <% end_loop %>
    </div>
</section>