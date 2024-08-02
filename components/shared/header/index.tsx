import { ShoppingCart, UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

const Header = async () => {
    
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
            <ShoppingCart/>
            Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signin">
            <UserIcon/>
            Sign in
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:hidden block   px-5 pb-2">
      </div>
    </header>
  )
}

export default Header