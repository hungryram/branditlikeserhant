'use client'
import ContentEditor from "../util/content-editor";
import HeaderSection from "./header-section";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import FormBuilder from "./form-builder";
import Script from "next/script";
import { useEffect } from "react";
import HubspotContactForm from "./hubspot-form";


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
    stepOneContent: any;
    stepTwoContent: any;
    stepThreeContent: any;
    formSchema: any;
    id: string;
}

export default function CalltoActionCustom({
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
    modalContent,
    stepOneContent,
    stepTwoContent,
    formSchema,
    id,
    stepThreeContent
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
        setIsOpen(true)
    }

    return (
        <div style={allStyles} id={id}>
            <div className="container">
                <div>
                    <div>
                        <div className="mx-auto max-w-4xl sm:text-center">
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
                        </div>
                        <div className="mt-20 flow-root">
                            <div className="isolate content -mt-16 grid grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:mt-0 lg:grid-cols-3 lg:divide-x lg:divide-y-0 bg-white justify-center">
                                <div className="p-10">
                                    <div className="w-8 h-8 border-[#264495] border-2 rounded-full flex items-center justify-center text-[#264495] mx-auto">
                                        <span>1</span>
                                    </div>
                                    <div className="mt-6 text-center">
                                        {stepOneContent &&
                                            <ContentEditor
                                                content={stepOneContent}
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="md:p-10 p-4">
                                    <div className="w-8 h-8 border-[#264495] border-2 rounded-full flex items-center justify-center text-[#264495] mx-auto">
                                        <span>2</span>
                                    </div>
                                    <div className="mt-6">
                                        {stepTwoContent &&
                                            <div className="text-center">
                                                <ContentEditor
                                                    content={stepTwoContent}
                                                />
                                            </div>
                                        }
                                        <div className="mt-6 mx-auto flex justify-center">
                                            {/* <FormBuilder
                                                formSchema={formSchema}
                                            /> */}
                                            <HubspotContactForm />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:p-10 p-4">
                                    <div className="w-8 h-8 border-[#264495] border-2 rounded-full flex items-center justify-center text-[#264495] mx-auto">
                                        <span>3</span>
                                    </div>
                                    <div className="mt-6">
                                        {stepThreeContent &&
                                            <div className="text-center">
                                                <ContentEditor
                                                    content={stepThreeContent}
                                                />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
