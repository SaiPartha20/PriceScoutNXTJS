"use client"
import {FormEvent, Fragment, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { addUserEmailProduct } from '@/lib/actions'

interface Props{
    productId: string
}
const Modal = ({productId}: Props) => {
    let [isOpen, setIsOpen] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('');
    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setIsSubmitting(true);
        await addUserEmailProduct(productId, email);
        setIsSubmitting(false);
        setEmail('')
        closeModal();
    };
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return (
    <>
    <button type="button" className="btn btn-black w-full" onClick={openModal}>
          Track
      </button>
      <Transition appear show={isOpen} as={Fragment}>

              <Dialog as="div" onClose={closeModal} className="dialog-container">
                  <div className="min-h-screen px-4 text-center">

                      <Transition.Child
                          as="div"
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-0"
                          leaveTo="opacity-100">
                          <Dialog.Overlay className="fixed inset-0" />

                      </Transition.Child>

                      <span className="inline-block h-screen align-middle" aria-hidden="true"></span>

                      <Transition.Child
                          as="div"
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                      > 
                      <div className="dialog-content">
                              <div className="flex flex-col">
                                  <div className="flex justify-between">
                                      <div className="p-3 border border-gray-200 rounded-10">

                                          <Image
                                              src="/assets/icons/logo.svg"
                                              alt="logo"
                                              width={28}
                                              height={28} />
                                      </div>

                                      <Image
                                          src="/assets/icons/x-close.svg"
                                          alt="close"
                                          width={24}
                                          height={24}
                                          className="cursor-pointer"
                                          onClick={closeModal} />

                                  </div>

                                  <h4 className="dialog-head_text">
                                      Stay updated with product pricing alerts right in your inbox!
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-2">
                                      Never miss a bargain again with our timely alerts!
                                  </p>
                                
                                  <form className="flex flex-col mt-5 " onSubmit={handleSubmit}>

                                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                          Email Address
                                      </label>

                                      <div className="dialog-input_container">
                                          <Image
                                              src="/assets/icons/mail.svg"
                                              alt="mail"
                                              width={18}
                                              height={18} />
                                          <input required type="email" id="email" placeholder="Enter Your Email Address" className="dialog-input" value={email}
                                          onChange={(e) => setEmail(e.target.value)}/>
                                      </div>

                                      <button type="submit" className="dialog-btn">
                                        {isSubmitting ? "Submitting..." : "Track"}
                                      </button>

                                  </form>

                              </div>
                          </div>


                      </Transition.Child>
                      <span className="inline-block h-screen align-middle" aria-hidden="true"></span>
                  </div>
              </Dialog>
          </Transition></>
  )
}

export default Modal

function addUserEmailToProduct(productId: any, email: string) {
    throw new Error('Function not implemented.')
}
