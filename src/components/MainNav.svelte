<script>
  let { logo = null, links = [] } = $props()

  const hasLogo = $derived(logo !== null && logo?.image)
  const hasLinks = $derived(links.length > 0)
</script>

<div class="crw-main-nav">
  <div class="crw-main-nav__inner">
    {#if hasLogo}
      <div class="crw-main-nav__top">
        <a href={logo?.url}>
          <img src={logo?.image} alt={logo?.alt ?? ''} />
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
                class:crw-main-nav__link--active={link?.active}
                href={link?.url}
                style:--main-nav-link-icon={`url(${link?.image})`}
              >
                <span class="crw-main-nav__link-title">{link?.title}</span>
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
    width: var(--main-nav-width);

    --main-nav-link-icon-size: 36px;
    --main-nav-link-opacity: 66%;
    --main-nav-link-tltle-opacity: 0;

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
        gap: var(--space-2);
      }
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: rgb(255 255 255 / var(--main-nav-link-opacity));
      text-decoration: none;
      transition: var(--global-transition);

      &:hover {
        --main-nav-link-opacity: 100%;
        --main-nav-link-tltle-opacity: 1;
      }

      &::before {
        content: '';
        display: block;
        width: var(--main-nav-link-icon-size);
        height: var(--main-nav-link-icon-size);
        background: currentColor;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-image: var(--main-nav-link-icon);
      }
    }

    &__link-title {
      display: block;
      opacity: var(--main-nav-link-tltle-opacity);
      transition: var(--global-transition);
    }
  }
</style>
