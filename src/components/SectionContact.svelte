<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import TextCircle from './shared/TextCircle.svelte'
  import SlideIntoView from './shared/SlideIntoView.svelte'

  let { id = null, title = null, items = [], image = null } = $props()
  const hasImage = $derived(image !== null)
  const hasLinks = $derived(items.length > 0)
</script>

<SectionContainer {id} {title} innerFillHeight={true} paddingBottom={true}>
  <div class="crw-contact">
    <SlideIntoView settings={{ threshold: 0.1 }}>
      <div class="crw-contact__content">
        {#if hasLinks}
          <div class="crw-contact__links">
            <ul>
              {#each items as item, index (index)}
                <li id={`portfolio-item-${index}`}>
                  <TextCircle
                    url={item?.url}
                    title={item?.title}
                    svgIcon={item?.svgIcon}
                  />
                </li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if hasImage}
          <div class="crw-contact__image">
            <img src={image?.src} alt={image?.alt ?? ''} />
          </div>
        {/if}
      </div>
    </SlideIntoView>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-contact {
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      display: grid;
      grid-template-areas: 'main';
    }

    &__links {
      grid-area: main;
      justify-self: start;
      align-self: end;
      max-width: 50%;
      width: 100%;
      padding: var(--space-2);

      ul,
      li {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      ul {
        display: flex;
        gap: var(--space-1);
      }
    }

    &__image {
      grid-area: main;

      img {
        display: block;
      }
    }
  }
</style>
