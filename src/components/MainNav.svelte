<script>
  import { isDark } from '../stores/theme.js'

  let { logo = null, links = [] } = $props()

  const hasLogo = $derived(logo !== null && logo?.image)
  const hasLinks = $derived(links.length > 0)

  function toggleIsDark() {
    isDark.set(!isDark.get())
  }
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
            <li
              class="crw-main-nav__link-wrapper"
              class:crw-main-nav__link-wrapper--active={link?.active}
            >
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

    <div class="crw-main-nav__bottom">
      <input type="checkbox" checked={isDark.get()} on:change={toggleIsDark} />
    </div>
  </div>
</div>

<style lang="scss">
  @use '../styles/vars.scss';

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .crw-main-nav {
    top: var(--space-1);
    left: var(--space-1);
    bottom: var(--space-1);
    position: fixed;
    width: var(--main-nav-width);

    --main-nav-link-icon-size: 36px; // TODO: 30px on mobile
    --main-nav-link-opacity: 66%;
    --main-nav-link-tltle-opacity: 0;
    --main-nav-link-color: rgb(255 255 255 / 66%);
    --main-nav-padding-inline: var(--space-1);

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__top {
      a {
        display: flex;
        justify-content: center;
        padding-inline: var(--main-nav-padding-inline);
      }
    }

    &__inner {
      background: var(--black);
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      height: 100%;
      padding-block: var(--space-4);
      box-shadow: 0 15px 30px rgb(0 0 0 / 25%);
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

    &__link-wrapper {
      position: relative;

      &--active {
        &::before {
          content: '';
          box-shadow: 0 0 75px var(--red);
          opacity: 0.5;
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          animation: fade-in-out ease-in-out infinite 3s;
        }
      }
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: var(--main-nav-link-color);
      text-decoration: none;
      transition: var(--global-transition);
      position: relative;
      padding-inline: var(--main-nav-padding-inline);

      &:hover {
        --main-nav-link-color: var(--white);
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

      &::after {
        content: '';
        display: block;
        width: 2px;
        height: 100%;
        background: var(--red);
        opacity: 0;
        position: absolute;
        right: 0;
      }

      &--active {
        --main-nav-link-color: var(--red);
        --main-nav-link-tltle-opacity: 1;

        &:hover {
          --main-nav-link-color: var(--red);
        }

        &::after {
          opacity: 1;
          box-shadow: 32px 0 50px var(--red);
          animation: fade-in-out ease-in-out infinite 3s;
        }
      }
    }

    &__link-title {
      display: block;
      opacity: var(--main-nav-link-tltle-opacity);
      transition: var(--global-transition);
    }

    &__bottom {
      display: flex;
      justify-content: center;
      padding-inline: var(--main-nav-padding-inline);
    }
  }
</style>
