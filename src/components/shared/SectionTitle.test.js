import { render, screen } from '@testing-library/svelte'
import { it, expect } from 'vitest'
import SectionTitle from './SectionTitle.svelte'

it('should render the section title', () => {
  render(SectionTitle, {
    props: { title: 'Test Title' },
  })

  const titleText = screen.getByText('Test Title')
  expect(titleText).toBeInTheDocument()
})
