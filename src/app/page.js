import SignUp from '../app/SignUp/page'
import Dashboard from './Dashboard/page'
import SignIn from './SignIn/page'
import Providers from '@/Redux/Providers'
export default function Home() {
  
  return (
    <div>
      <Providers>
        <Dashboard/>
      </Providers>
    </div>

  )
}
