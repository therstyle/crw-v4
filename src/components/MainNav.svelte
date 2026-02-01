<script>
  let { logo = null, links = [] } = $props()

  const hasLogo = $derived(logo !== null && logo?.image)
  const hasLinks = $derived(links.length > 0)
</script>

<div class="crw-main-nav">
  <div class="crw-main-nav__inner">
    {#if hasLogo}
      <div class="crw-main-nav__top">
        <a href={logo.url}>
          <img src={logo.image} alt={logo.alt ?? ''} />
        </a>
      </div>
    {/if}

    {#if hasLinks}
      <nav class="crw-main-nav__links">
        <ul>
          {#each links as link, index (index)}
            <li>
              <a
                class="crw-main-nav__link"
                href={link.url}
                style:--main-nav-link-image={`url(${link.image})`}
              >
                <span>{link.title}</span>
              </a>
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
    width: var(--sidebar-width);

    &__inner {
      background: var(--black);
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      height: 100%;
      overflow: hidden;
    }

    &__top {
    }

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__links {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      ul {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
      }
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.66);
      text-decoration: none;

      &::before {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        background: currentColor;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-image: var(--main-nav-link-image);
      }
    }
  }
</style>
