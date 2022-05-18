// Components
import { Navbar } from 'components'

// Styles
import { PageFrame, PageContainer } from './page.styles'

interface PageProps {
  children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return (
    <>
      <Navbar />
      <PageFrame>
        <PageContainer>{children}</PageContainer>
      </PageFrame>
    </>
  )
}
