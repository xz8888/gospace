import React from 'react';
import startDefense from '../../public/images/ic_defend@2x.png'
import Link from 'next/link'

const ContactSection =  () => {
  return (
    <section>
        <div className="container mx-auto text-spacey-black mb-20">
           <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 md:gap-4 p-5 md:p-0">
               <div className="flex flex-col gap-y-3 justify-between">
                  <h2 className="text-2xl font-medium mb-3"> Contact us</h2>
                  <div>
                      Have question about this Mars mission? Reach us on Discord at any time
                  </div>
                  <div className="mt-5">
                      <Link href="/">
                      <a className="bg-spacey-pink px-6 py-2 text-spacey-white rounded">
                          GET IN TOUCH
                      </a>
                      </Link>
                  </div>
               </div>
               <div className="flex flex-col gap-y-3 justify-between">
                  <h2 className="text-2xl font-medium mt-10 md:mt-0  mb-3 "> Sign up</h2>
                  <div>
                      You&lsquo;ll find us on Discord. You can also sign up to get the latest updates
                  </div>
                  <div className="flex flex-col md:flex-row mt-5  gap-y-3 md:gap-y-0">
                      <div className="flex-grow md:flex-grow-0 md:mr-5">
                      <input placeholder="email@domain.com" className="mr-2 pl-2 py-2 rounded bg-spacey-input-background w-full" />
                      </div>
                      <Link href="/">
                      <a className="bg-spacey-pink px-6 py-2 text-spacey-white rounded text-center">
                          SIGN UP
                      </a>
                      </Link>
                  </div>
               </div>
           </div>
        </div>
    </section>

  )
}

export default ContactSection
