import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import './style.css'
const Loader = () => {

  return (
    <Transition appear show={true} as={Fragment}>
    <Dialog as="div" className=" relative z-40 " >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
       
      >
        <div className="fixed inset-0 bg-black bg-opacity-60" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-2
         sm:p-4 text-center max-w-sm mx-auto ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform 
            overflow-hidden rounded-2xl bg-white p-6 text-left 
            align-middle shadow-xl transition-all">
           
                <div className="lds-spinner">
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   </div>
          
             
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default Loader


