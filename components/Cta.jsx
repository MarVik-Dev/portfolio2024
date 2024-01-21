import Link from 'next/link'
import { Button } from './ui/button'
const Cta = () => {
  return (
    <section className='py-24 bg-white dark:bg-secondary/50'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-10">
                    Vous avez un projet, une idée ?
                </h2>
            <Link href='/contact'>
                <Button className="dark:text-white">Contactez-moi</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta