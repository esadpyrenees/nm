
          <!-- info à propos / contacts -->
          <section class="contacts">
              <h2>Informations</h2>
              <?php $contacts = page("contacts") ?>
              <?= $contacts->text()->kt() ?>        
          </section>

          <!-- infos équipe -->
          <section class="team">
              <p>
                  <?php foreach ($contacts->team()->toStructure() as $member):?>
                  <span><?= $member->name() ?></span>
                  <?php endforeach ?>
              </p>
          </section>
          
      </main>
  </div>

  <!-- scripts -->
  <?php
    if ( option('environment') == 'local' ) :
      foreach ( option('basic-devkit.assets.scripts', array()) as $style):
        echo js($style.'?version='.md5(uniqid(rand(), true)));
      endforeach;
    else:
      echo js('assets/production/all.min.js');
    endif
  ?>

</body>
</html>
