import SectionContainer from '@/components/layout/containers/main-container/SectionContainer'
import CenteredPage from '@/components/layout/pages/generic/centered-page/CenteredPage'
import Heading from '@/components/ui/typography/heading/Heading'

export default function Home() {
  return (
    <CenteredPage>
      <SectionContainer id='main'>
        <Heading as='h1' title='Login' variant='paragraph' />
      </SectionContainer>
    </CenteredPage>
  )
}
