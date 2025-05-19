import Heading from '@/components/ui/typography/heading/Heading'
import CenteredPage from '../../generic/centered-page/CenteredPage'
import styles from './LoginPageComponent.module.scss'
import SectionContainer from '@/components/layout/containers/main-container/SectionContainer'
import GenericInput from '@/components/ui/inputs/generic-input/GenericInput'
import Button from '@/components/ui/buttons/button/Button'
import InternalLinkButton from '@/components/ui/links/internal-link-button/InternalLinkButton'

export default function LoginPageComponent() {
    return (
      <CenteredPage>
        <Heading as='h1' title='Login' variant='page'  />
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
            <Button type='submit' as='form-submit' content='login' />
          </div>
          <div className={styles.columnContainer}>
            <InternalLinkButton href='/'>Forgot Password</InternalLinkButton>
            <InternalLinkButton href='/'>Register</InternalLinkButton>
          </div>
        </SectionContainer>
      </CenteredPage>
    )
}
