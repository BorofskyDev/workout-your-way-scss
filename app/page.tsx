import SectionContainer from '@/components/layout/containers/main-container/SectionContainer'
import CenteredPage from '@/components/layout/pages/generic/centered-page/CenteredPage'
import GenericInput from '@/components/ui/inputs/generic-input/GenericInput'
import Heading from '@/components/ui/typography/heading/Heading'

export default function Home() {
  return (
    <CenteredPage>
      <SectionContainer id='main'>
        <Heading as='h1' title='Login' variant='paragraph' />
        <GenericInput id='id' label='Email' placeholder='youremail@example.com'/>
        <GenericInput id='password' label='Password' placeholder='NotARealPassword'/>
      </SectionContainer>
    </CenteredPage>
  )
}
