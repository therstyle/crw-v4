<script>
  let {
    logo = null,
    links = []
  } = $props()

  const hasLogo = $derived(logo !== null  && logo?.image)
  const hasLinks = $derived(links.length > 0)
</script>

<div class="crw-main-nav">
  {#if hasLogo}
    <div class="crw-main-nav__top">
      <button data-target={logo.url}>
        <img src={logo.image} alt={logo.alt ?? ""} />
      </button>
    </div>
  {/if}

  {#if hasLinks}
    <nav class="crw-main-nav__links">
      <ul>
        {#each links as link, index (index)}
          <li>
            <button data-target={link.url}>
              <span>{link.title}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}

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
    min-height: calc(100dvh - var(--space-1));
    margin-block: var(--space-1);
    margin-inline-start: var(--space-1);

    &__top {
      background: red;
    }
  }
</style>
