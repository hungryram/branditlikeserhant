'use client'
import Image from "next/image";
import ContentEditor from "../util/content-editor";
import { ctaData } from "../../../../../sample/data";
import Styles from "./cta-textimage.module.css"
import HeaderSection from "./header-section";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { urlForImage } from "../../../../../sanity/lib/image";

interface Props {
    image: string;
    altText: string;
    blurData: string;
    content: string;
    reverseColumn: boolean;
    backgroundStyles: any;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    paddingTop: string;
    paddingBottom: string;
    modalButton: string;
    modalImage: string;
    modalContent: any;
}

export default function CalltoActionTextImage({
    image,
    altText,
    blurData,
    content,
    reverseColumn,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    paddingTop,
    paddingBottom,
    textAlign,
    modalButton,
    modalImage,
    modalContent
}: Props) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(false)
    }

    return (
        <div style={allStyles}>
            <div className="container">
                <div className={`${Styles.ctaTextImageWrapper} space-y-10 ${reverseColumn ? 'flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2">
                        {(content || primaryButtonLink || secondaryButtonLink) && (
                            <HeaderSection
                                content={content}
                                textAlign={textAlign}
                                // PRIMARY
                                buttonLink={primaryButtonLink}
                                primaryButtonText={primaryButtonText}
                                primaryButtonStyle={primaryButtonStyle}
                                // SECONDARY
                                secondaryButtonLink={secondaryButtonLink}
                                secondaryButtonText={secondaryButtonText}
                                secondaryButtonStyle={secondaryButtonStyle}
                            />
                        )}
                    {modalButton &&
                        <>
                            <div>
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="primary-button"
                                >
                                    {modalButton}
                                </button>
                            </div>
                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="md:w-1/2 w-full p-4 transform overflow-hidden text-left align-middle shadow-xl transition-all">
                                                    <div className="bg-[#046ABE] md:flex justify-center">
                                                        <div className="overflow-hidden bg-[#046ABE] md:w-1/3 relative md:h-auto h-96">
                                                            <Image
                                                                className="h-full w-full object-cover object-center"
                                                                src={urlForImage(modalImage).url()}
                                                                alt={altText}
                                                                fill={true}
                                                            />
                                                        </div>
                                                        <div className="md:w-2/3 text-white">
                                                            <div className="relative mx-auto py-24 sm:py-32 lg:py-40 lg:px-32 px-4">
                                                                <div className="content">
                                                                    {modalContent &&
                                                                        <ContentEditor
                                                                            content={modalContent}
                                                                        />
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </>
                    }
                    </div>
                    <div className="lg:w-1/2">
                        {image ?
                            <Image
                                src={image}
                                alt={altText}
                                placeholder={blurData ? 'blur' : 'empty'}
                                blurDataURL={blurData}
                                width={1824}
                                height={1080}
                            />
                            :
                            <img src={ctaData.image} alt="placeholder" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
