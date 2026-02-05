<script>
  let {
    id = 0,
    type = null,
    title = null,
    description = null,
    image = null,
    url = null,
  } = $props()
</script>

<article class="crw-portfolio-item" id={`portfolio-item-${id}`}>
  <a class="crw-portfolio-item__image" href={url} target="_blank">
    <img src={image} alt={title} loading="lazy" />
  </a>

  <div class="crw-portfolio-item__info">
    <h3>{title}</h3>
    <p>{@html description}</p>
    <div class="crw-portfolio-item__details">
      <a href={url} target="_blank">View Project</a>
    </div>
  </div>
</article>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-portfolio-item {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__image {
      display: block;

      img {
        width: 100%;
        display: block;
      }
    }

    &__info {
      font-size: 16px;
      padding: var(--space-2);
      background: var(--med-gray-alpha);
      flex: 1;
      display: flex;
      flex-direction: column;

      h3 {
        margin-bottom: var(--space);
      }

      p {
        margin-bottom: var(--space-2);
        flex: 1;
      }

      small {
        display: block;
        margin-top: var(--space-1);

        a {
          display: inline-block;
          margin-top: 8px;
        }
      }
    }

    &__details {
      display: flex;
      justify-content: flex-end;

      a {
        display: inline-block;
        border-radius: 30px;
        padding: var(--space-half) var(--space-1);
        background: var(--white);
        color: var(--med-gray);
        font-weight: 600;
        font-size: 13px;
        text-decoration: none;

        @include mixins.hocus {
          text-decoration: underline;
        }
      }
    }
  }
</style>
