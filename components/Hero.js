import Button from '@/components/Button'
import Navbar from '@/components/Navbar'

export default function Hero() {
    return(
        <div className='bg-hero h-[712px] md:h-[640px] hp:h-[600px] bg-white'>
        <div className='container mx-auto'>
          <Navbar />
          <div className='text-center mb-[64px] md:mt-28 hp:mt-5'>
            <h1 className='text-white text-3xl font-semibold font-plexmono w-8/12 2xl:w-6/12 lg:w-9/12 md:w-11/12 hp:w-full mx-auto leading-relaxed'>Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
            <p className='text-white opacity-60 text-lg font-sourcesans mx-auto 2xl:w-[26%] w-[31%] lg:w-[39%] md:w-[53%] hp:w-full mt-6 leading-relaxed'>Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.</p>
          </div>
          <div className='text-center mx-auto'>
            <Button href="#profile" pill variant="yellow">Pelajari</Button>
          </div>
        </div>
      </div>
    );
}