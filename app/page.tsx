import SectionContainer from '@/components/layout/containers/main-container/SectionContainer'
import CenteredPage from '@/components/layout/pages/generic/centered-page/CenteredPage'
import GenericInput from '@/components/ui/inputs/generic-input/GenericInput'
import Heading from '@/components/ui/typography/heading/Heading'
import styles from './Test.module.scss'
import Button from '@/components/ui/buttons/button/Button'
import InternalButtonLink from '@/components/ui/links/internal-link-button/InternalLinkButton'

export default function Home() {
  return (
    <CenteredPage>
      <Heading as='h1' title='Login' variant='page' />
      <SectionContainer id='main'>
        <div className={styles.columnContainer}>
          <GenericInput
            id='id'
            label='Email'
            placeholder='youremail@example.com'
          />
          <GenericInput
            id='password'
            label='Password'
            placeholder='NotARealPassword'
          />
          <Button  type='submit' as='form-submit' content='login' />
        </div>
        <div className={styles.columnContainer}>
          <InternalButtonLink href='/'>Forgot Password</InternalButtonLink>
          <InternalButtonLink href='/'>Register</InternalButtonLink>
        </div>
      </SectionContainer>
    </CenteredPage>
  )
}
