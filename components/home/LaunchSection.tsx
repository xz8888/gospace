import React from 'react';
import Image from 'next/image'
import startLaunch  from '../../public/images/ic_launch@2x.png'
import Link from 'next/link'

const LaunchSection =  () => {
  return (
    <section>
        <div className="container mx-auto md:mt-20 pt-10 md:pt-10">
            <div className="flex flex-rows justify-center  align-center mt-20">
                <div className="w-11/12 hidden md:block" >
                    <div className="font-bankgothic text-8xl">MARS &</div>
                    <div className="flex flex-rows flex-wrap items-center">
                         <div className="w-40">COLONY MARS with THE POWER OF BLOCK CHAIN</div> <div className="font-bankgothic text-8xl">BLOCKCHAIN</div>
                    </div>
                </div>
                <div className="w-11/12 block md:hidden" >
                    <div className="text-center">
                        <div className="font-bankgothic text-5xl">MARS & BLOCKCHAIN</div>
                        <div className="flex flex-cols flex-wrap items-center justify-center px-10 text-xl mt-5">
                            <div className="text-center">COLONY MARS with </div>
                            <div className="text-center"> THE POWER OF BLOCK CHAIN</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gradientBackground md:p-10 py-10 mt-20">
            <div className="md:container mx-auto ">
                <div className="flex flex-rows justify-center">
                    <div className="w-11/12">
                        <div className="w-96">
                        Purchase your SpaceY Boardding Pass to get early access to the grand exploring on Mars
                        </div>
                </div>
               </div>
            </div>
        </div>
        <div className="container mx-auto mt-20 mb-20 overflow-hidden">   
            
            <div className="mx-auto md:float-right w-7/12 md:w-4/12 xl:w-3/12 h-auto"> 
              <Link href="/">
                <a>
                    <Image src={startLaunch} layout="responsive"></Image>
                </a>
              </Link>
            </div>
        </div>
    </section>

  )
}

export default LaunchSection
