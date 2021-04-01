<!DOCTYPE html>
<html lang="<?php echo $kirby->language() ?? 'fr' ?>">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <script>document.getElementsByTagName('html')[0].className = 'js'</script>
  
  <?php snippet("header.metas") ?>

  <?php
    if ( option('environment') == 'local' ) :
      foreach ( option('basic-devkit.assets.styles', array()) as $style):
        echo css($style.'?version='.md5(uniqid(rand(), true)));
      endforeach;
    else:
      echo css('assets/production/all.min.css');
    endif
  ?>

</head>
<body
   data-login="<?php e($kirby->user(),'true', 'false') ?>"
   data-template="<?php echo $page->template() ?>"
   data-intended-template="<?php echo $page->intendedTemplate() ?>">
  <div id="page">

    <header id="header">
      <h1>
        <a href="<?= $site->url()?>" class="nouveaux-medias">
          Pôle<br> Nouveaux <br> médias<br> 
        </a>
        <span>— <br></span>
        <a href="https://esad-pyrenees.fr" class="esad-pyreneees">
          École<br> supérieure<br> d’art et <br>de design <br>des Pyrénées
        </a>
      </h1>
    </header>

    <main>
      <section id="title" >
        <h1>
          <a href="<?= $site->url()?>">
            <?php snippet("logo") ?>
          </a>
        </h1>
      </section>
      <section id="nav">
        <nav>
          <ul>
            <?php // menu : parcours toutes les pages publiques de la racine du site ?>
            <?php foreach($pages->listed() as $page) :?>
              <li><a href="<?= $page->url() ?>"><?= $page->title() ?></a></li>
            <?php endforeach ?>
          </ul>
        </nav>
      </section>