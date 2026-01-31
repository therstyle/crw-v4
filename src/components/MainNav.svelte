<script>
  let { logo = null, links = [] } = $props()

  const hasLogo = $derived(logo !== null && logo?.image)
  const hasLinks = $derived(links.length > 0)
</script>

<div class="crw-main-nav">
  <div class="crw-main-nav__inner">
    {#if hasLogo}
      <div class="crw-main-nav__top">
        <button data-target={logo.url}>
          <img src={logo.image} alt={logo.alt ?? ''} />
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

    <div class="crw-main-nav__bottom"></div>
  </div>
</div>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-main-nav {
    top: var(--space-1);
    left: var(--space-1);
    bottom: var(--space-1);
    position: fixed;

    &__inner {
      background: var(--black);
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      height: 100%;
      overflow: hidden;
    }

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__top {
    }
  }
</style>
