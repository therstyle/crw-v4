import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/svelte'
import { afterEach } from 'vitest'
import { vi } from 'vitest'

const MockIntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Add it to the global window object
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

// Automatically clean up the DOM after each test to prevent memory leaks
afterEach(() => {
  cleanup()
})
