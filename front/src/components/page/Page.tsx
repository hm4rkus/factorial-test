import { Navbar } from 'components/navbar'
import { PageFrame, PageHeading, PageContainer } from './page.styles'

interface PageProps {
  heading?: string
  children: React.ReactNode
}

export const Page = ({ heading, children }: PageProps) => {
  return (
    <>
      <Navbar />
      <PageFrame>
        <PageContainer>
          <PageHeading size={'lg'}>{heading}</PageHeading>
          {children}
        </PageContainer>
      </PageFrame>
    </>
  )
}
