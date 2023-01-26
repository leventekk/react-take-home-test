import type { PropsWithChildren, ReactElement } from 'react'
import { render, type RenderResult } from '@testing-library/react'
import Theme from '@common/elements/Theme/Theme'

const renderWithTheme = (component: ReactElement, options = {}): RenderResult => {
  const Wrapper = ({ children }: PropsWithChildren): ReactElement => <Theme>{children}</Theme>

  return render(component, { wrapper: Wrapper, ...options })
}

export default renderWithTheme
