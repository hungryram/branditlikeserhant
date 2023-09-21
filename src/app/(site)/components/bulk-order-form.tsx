'use client'
import Image from "next/image";
import HeaderSection from "./templates/header-section";
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/20/solid'


interface Props {
    image: string;
    altText: string;
    blurData: string;
    content: string;
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    paddingTop: string;
    paddingBottom: string;
    backgroundStyles: any;
}

export default function BulkOrderForm({
    image,
    altText,
    blurData,
    content,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    backgroundStyles,
    paddingTop,
    paddingBottom,
}: Props) {

    const deliveryMethods = [
        { id: 1, title: '30 Copies', turnaround: '30-Minute Live Webinar Q+A Signed Book', price: '$900' },
        { id: 2, title: '100 Copies', turnaround: 'X-Hour In-Person Branding Summit Signed Book', price: '$3,000' },
        { id: 2, title: '300 Copies', turnaround: 'Group Dinner with Ryan Serhant Ahead of Summit X-Hour, In Person Branding Summit, Tour of Signature Listing With Ryan Serhant Signed Book', price: '$9,000' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }


    return (
        <div style={allStyles}>
            <div className="container">
                <div className="max-w-md mx-auto text-center mb-10">
                    {image &&
                        <Image
                            src={image}
                            alt={altText}
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                            width={1000}
                            height={0}
                            className="relative z-50"
                        />
                    }
                </div>
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
                <div className="bulkOrderForm">
                    <div className="mt-20 flow-root">
                        <div className="isolate content -mt-16 grid grid-cols-1 gap-y-8 sm:mx-auto lg:mt-0 lg:grid-cols-2 lg:divide-x lg:divide-y-0 bg-white justify-center">
                            <div className="p-10">
                                <div className="bg-blue-800 text-white p-4 w-full content text-center">
                                    <h3 className="!m-0">STEP ONE - YOUR DETAILS</h3>
                                </div>
                                <div className="mt-6">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 font-medium leading-6 text-gray-900">
                                            First Name
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 font-medium leading-6 text-gray-900">
                                            Last Name
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 font-medium leading-6 text-gray-900">
                                            Email Address
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 font-medium leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-10 p-4">
                                <div className="bg-blue-800 text-white p-4 w-full content text-center">
                                    <h3 className="!m-0">STEP TWO - SHIPPING DETAILS</h3>
                                </div>
                                <div className="mt-6">
                                    <section aria-labelledby="shipping-heading">
                                        <div className="mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-3">

                                            <div className="sm:col-span-3">
                                                <label htmlFor="address" className="block mb-2 font-medium text-gray-900">
                                                    Address
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        name="address"
                                                        autoComplete="street-address"
                                                        className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3 mt-4">
                                                <label htmlFor="apartment" className="block mb-2 font-medium text-gray-900">
                                                    Apartment, suite, etc.
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        id="apartment"
                                                        name="apartment"
                                                        className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label htmlFor="city" className="block mb-2 font-medium text-gray-900">
                                                    City
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        autoComplete="address-level2"
                                                        className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label htmlFor="region" className="block mb-2 font-medium text-gray-900">
                                                    State / Province
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        id="region"
                                                        name="region"
                                                        autoComplete="address-level1"
                                                        className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label htmlFor="postal-code" className="block mb-2 font-medium text-gray-900">
                                                    Postal code
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        id="postal-code"
                                                        name="postal-code"
                                                        autoComplete="postal-code"
                                                        className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4 sm:col-span-3">
                                                <label htmlFor="country" className="block mb-2 font-medium text-gray-900">
                                                    Country
                                                </label>
                                                <div className="mt-1">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md text-black"
                                                    >
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="col-span-3 md:p-10 p-4">
                                <div className="bg-blue-800 text-white p-4 w-full content text-center">
                                    <h3 className="!m-0">STEP THREE - BILLING INFO</h3>
                                </div>
                                <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                                    <div className="col-span-4">
                                        <label htmlFor="card-number" className="block mb-2 font-medium text-gray-900">
                                            Card number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="card-number"
                                                name="card-number"
                                                autoComplete="cc-number"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-4">
                                        <label htmlFor="name-on-card" className="block mb-2 font-medium text-gray-900">
                                            Name on card
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="name-on-card"
                                                name="name-on-card"
                                                autoComplete="cc-name"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="expiration-date" className="block mb-2 font-medium text-gray-900">
                                            Expiration date (MM/YY)
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="expiration-date"
                                                id="expiration-date"
                                                autoComplete="cc-exp"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="cvc" className="block mb-2 font-medium text-gray-900">
                                            CVC
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="cvc"
                                                id="cvc"
                                                autoComplete="csc"
                                                className="block py-2 w-full !bg-white !border !border-gray-600 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 md:p-10 p-4">
                                <div className="bg-blue-800 text-white p-4 w-full content text-center">
                                    <h3 className="!m-0">STEP FOUR - SELECT YOUR PACKAGE</h3>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                        <RadioGroup.Label className="text-lg font-medium text-gray-900">Number of Copies</RadioGroup.Label>

                                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                                            {deliveryMethods.map((deliveryMethod) => (
                                                <RadioGroup.Option
                                                    key={deliveryMethod.id}
                                                    value={deliveryMethod}
                                                    className={({ checked, active }) =>
                                                        classNames(
                                                            checked ? 'border-transparent' : 'border-gray-300',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                                                        )
                                                    }
                                                >
                                                    {({ checked, active }) => (
                                                        <>
                                                            <span className="flex flex-1">
                                                                <span className="flex flex-col">
                                                                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                                        {deliveryMethod.title}
                                                                    </RadioGroup.Label>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className="mt-1 flex items-center text-sm text-gray-500"
                                                                    >
                                                                        {deliveryMethod.turnaround}
                                                                    </RadioGroup.Description>
                                                                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                                                        {deliveryMethod.price}
                                                                    </RadioGroup.Description>
                                                                </span>
                                                            </span>
                                                            {checked ? <CheckCircleIcon className="h-5 w-5 text-blue-700" aria-hidden="true" /> : null}
                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-lg'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <button className="text-white w-80 bg-accent py-7">ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}