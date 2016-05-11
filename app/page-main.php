<?php
/*
Theme Name: Web-Alex Theme
Version: 1.0
Description: Web-Alex
Author: Голуб Александр
Author URI: http://web-alex.in.ua

Template Name: Главная
 */
get_header();

?>

<body>
<nav class="menu onepage-pagination">
    <ul>
        <li><a data-index="1">Main</a></li>
        <li><a data-index="2">About me</a></li>
        <li><a data-index="3">My works</a></li>
        <li><a data-index="4">Contacts</a></li>
    </ul>
</nav>
<div class="main">
    <section class="home">
        <div class="section_container">
            <h1>Alexander Holub</h1>
            <h3>Front-End developer</h3>
        </div>
    </section>
    <section class="about">
        <div class="section_container">
            <h1>About Me</h1>
            <h3>Let's take a closer look</h3>
            <p>I`m a talanted Front-end developer from Odessa. My skills include the development of sites from scratch, make-up layouts for websites and landing on the CMS.
            <p>For development using modern frameworks (Bootstrap, Materialize) and the latest version of the famous (and not so) libraries and plug-ins as well as the preprocessor and assembler packages that allow you to speed up and optimize the code.</p>
        </div>
    </section>
    <section class="works">
        <div class="section_container">
            <h1>My Works</h1>
            <h3>Some of my works</h3>
            <?php
            $args = array(
                'post_type' => 'projects',
                'posts_per_page' => '50'
            );
            query_posts($args);

            if ( have_posts() ) :
                echo '<div class="works-carousel">';
                while ( have_posts() ) : the_post();
                    ?>

                        <div class="work_slide">
                            <div class="ws_img_cont"  <?php if( get_field('project_image') ): ?>style="padding-top: <?php the_field('proj_padding'); ?>px;" <?php endif; ?>>
                                <?php if( get_field('project_image') ): ?>
                                    <img src="<?php the_field('project_image'); ?>" alt="alt" />
                                <?php endif; ?>
                            </div>
                            <div class="ws_descr">
                                <h4><?php the_field('project_name'); ?></h4>
                                <a href="<?php the_field('project_url'); ?>" target="_blank" class="ext_link"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                            </div>
                        </div>

                    <?
                endwhile;
                echo "</div>";
            endif; ?>
        </div>
    </section>
    <section class="contacts">
        <div class="section_container">
            <h1>Contacts</h1>
            <h3>Contact me</h3>
            <h6><span>Ukraine, Odessa</span></h6>
            <p><span>Phone:</span> <br> +38(063)991-64-11</p>
            <p><span>E-Mail:</span> <br> golub.alexander1@gmail.com</p>
            <div class="social">
                <a href="https://vk.com/stay.meta1" target="_blank"><i class="fa fa-vk"></i></a>
                <a href="https://www.facebook.com/alexander.golub.94"><i class="fa fa-facebook"></i></a>
                <a href="https://plus.google.com/u/0/106412784291963474998" target="_blank"><i class="fa fa-google-plus"></i></a>
                <a href="#" target="_blank"><i class="fa fa-github"></i></a>
            </div>
        </div>
    </section>
</div>
<!-- Здесь пишем код -->

<?php
get_footer(); ?>
