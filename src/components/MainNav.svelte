<script>

</script>

<div class="crw-main-nav">
  <div class="crw-main-nav__top">

  </div>

  <nav class="crw-main-nav__links">

  </nav>

  <div class="crw-main-nav__bottom">

  </div>
</div>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-main-nav {
    background: var(--black);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    min-height: calc(100dvh - 16px);
    margin-block: 8px;
    margin-inline-start: 8px;

    &__top {
      background: red;
    }
  }
</style>
