'use client'
import Image from "next/image";
import { ctaData } from "../../../../../sample/data";
import HeaderSection from "./header-section";
import Styles from "./cta-fullwidthimage.module.css"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { urlForImage } from "../../../../../sanity/lib/image";
import ContentEditor from "../util/content-editor";

interface Props {
    image: string;
    altText: string;
    blurData: string;
    content: string;
    reverseColumn: boolean;
    backgroundStyles: any;
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    modalButton: string;
    modalContent: string;
    modalImage: any
}

export default function CalltoActionFullWidth({
    image,
    altText,
    blurData,
    content,
    reverseColumn,
    backgroundStyles,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    modalButton,
    modalImage,
    modalContent
}: Props) {


    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <div className={`${Styles.fullWidthWrapper} ${reverseColumn ? 'flex-row-reverse' : ''}`} style={backgroundStyles}>
            <div className="relative h-96 md:left-0 md:h-full lg:w-1/2">
                <Image
                    className="h-full w-full object-cover"
                    src={image}
                    alt={altText}
                    placeholder={blurData ? 'blur' : 'empty'}
                    blurDataURL={blurData}
                    fill={true}
                />
            </div>
            <div className="relative mx-auto lg:w-1/2 justify-center flex items-center">
                <div className="lg:w-2/3 px-4 section">
                    {(content || primaryButtonLink || secondaryButtonLink) ? (
                        <>
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
                        </>
                    ) :
                        <div dangerouslySetInnerHTML={{ __html: ctaData.content }} />
                    }
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
                                                <Dialog.Panel className="w-1/2 transform overflow-hidden text-left align-middle shadow-xl transition-all">
                                                    <div className="relative bg-[#046ABE] md:flex justify-center">
                                                        <div className="relative h-80 overflow-hidden bg-[#046ABE] md:absolute md:left-0 md:h-full md:w-1/3">
                                                            <Image
                                                                className="h-full w-full object-cover"
                                                                src={urlForImage(modalImage).url()}
                                                                alt={altText}
                                                                fill={true}
                                                            />
                                                            <svg
                                                                viewBox="0 0 926 676"
                                                                aria-hidden="true"
                                                                className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                                                            >
                                                                <path
                                                                    fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                                                                    fillOpacity=".4"
                                                                    d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                                                                />
                                                                <defs>
                                                                    <linearGradient
                                                                        id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                                                                        x1="926.392"
                                                                        x2="-109.635"
                                                                        y1=".176"
                                                                        y2="321.024"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#776FFF" />
                                                                        <stop offset={1} stopColor="#FF4694" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div className="md:w-2/3 text-white">
                                                            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                                                                <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 content">
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
            </div>
        </div>
    )
}
