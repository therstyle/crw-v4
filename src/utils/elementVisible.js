function elementVisible(el, options = {}) {
  const defaults = { threshold: 1 }
  const settings = { ...defaults, ...options }

  if (!el) return

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        el.dispatchEvent(new CustomEvent('crwElementVisible'))
        observer.unobserve(entry.target)
      }
    }
  }, settings)

  observer.observe(el)
  return { destroy: () => observer.disconnect() }
}

export default elementVisible
