import Image from "next/image";
import HeaderSection from "./templates/header-section";

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
                        <div className="isolate content -mt-16 grid grid-cols-1 gap-y-16 sm:mx-auto lg:mt-0 lg:grid-cols-2 lg:divide-x lg:divide-y-0 bg-white justify-center">
                            <div className="p-10">
                                <div className="bg-blue-800 text-white p-4 w-full content text-center">
                                    <h3 className="!m-0">STEP ONE</h3>
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
                                    <h3 className="!m-0">STEP TWO</h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}