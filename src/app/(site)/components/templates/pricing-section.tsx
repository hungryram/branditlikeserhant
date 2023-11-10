import { AiFillCheckSquare } from 'react-icons/ai'
import Styles from "./pricing.module.css"
import HeaderSection from './header-section';
import Image from 'next/image';
import { urlForImage } from '../../../../../sanity/lib/image';

interface Props {
    name: string;
    price: string;
    href: string;
    features: string[],
    description: string,
    packageType: string;
    ctaText: string;
    packageBackground: any;
    packageTextColor: any;
    discountPrice: string;
    image: string;
    borderColor: string;
    buttonText: string;
    link: string;
}

interface Pricing {
    packages: any;
    columnNumber: number;
    content: any;
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    backgroundStyles: any;
    packageBackground: any;
    packageTextColor: any;
    paddingTop: string;
    paddingBottom: string;
    id: string;
}

export function PricingTable({
    name,
    price,
    href,
    features,
    description,
    packageType,
    ctaText,
    borderColor,
    packageBackground,
    packageTextColor,
    discountPrice,
    image,
    link,
    buttonText
}: Props) {
    return (
        <div className="mx-2 rounded-3xl border-[4px]" style={{
            borderColor: borderColor,
            color: packageTextColor,
            backgroundColor: borderColor
        }}>
            {name &&
                <h3 id={name.replace(/ /g, '')} className="text-center text-xl font-semibold p-4">
                    {name}
                </h3>
            }
            <div className="bg-white rounded-3xl">

                <div className="relative w-full h-80">
                    <Image
                        src={urlForImage(image).url()}
                        alt=""
                        fill={true}
                        className="object-cover"

                    />
                </div>
                <div className="text-black px-4">
                    {features &&
                        <ul role="list" className="mt-6 space-y-3">
                            {features?.map((feature: string) => {
                                return (
                                    <li key={feature.replace(/ /g, '')} className="flex gap-x-3">
                                        <AiFillCheckSquare className="h-6 w-5 flex-none text-[#339933]" aria-hidden="true" />
                                        <span className="font-semibold">{feature}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                    <div className="pt-8 pb-4 items-end flex justify-center">
                        <p className="text-center italic text-lg"><span className="line-through">{price}</span> <span className="underline">{discountPrice}</span></p>
                    </div>
                    <div className="mt-6 mx-auto w-full flex justify-center pb-2">
                        <a href={link} target="_blank" rel="noreferrer" style={{ backgroundColor: borderColor }} className="text-white w-60 text-center py-3">{buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PricingSection({
    packages,
    columnNumber,
    content,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    backgroundStyles,
    packageBackground,
    packageTextColor,
    paddingTop,
    paddingBottom,
    id
}: Pricing) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div style={allStyles} id={id}>
            <div className="container">
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
                <div className={`flow-root ${content && 'mt-16'}`}>
                    <div className="flex md:w-1/2 mx-auto">
                        <div className={`${Styles.pricingGrid} h-full grid lg:grid-cols-${columnNumber} grid-cols-1`}>
                            {packages ? packages?.map((node: any, i: any) => {
                                return (
                                    <PricingTable
                                        key={i}
                                        name={node?.name}
                                        price={node?.price}
                                        discountPrice={node?.Discountprice}
                                        image={node?.image}
                                        buttonText={node?.buttonText}
                                        link={node?.link}
                                        packageType={node?.packageType}
                                        ctaText={node?.buttonText}
                                        href={node?.link}
                                        features={node?.details}
                                        description={node?.content}
                                        packageBackground={packageBackground}
                                        packageTextColor={packageTextColor}
                                        borderColor={node?.borderColor.hex}
                                    />
                                )
                            })
                                :
                                pricingTiers?.map((node, i) => {
                                    return (
                                        <PricingTable
                                            key={i}
                                            name={node?.name}
                                            price={node?.price}
                                            buttonText={node?.buttonText}
                                            link={node?.link}
                                            packageType={node?.packageType}
                                            features={node?.features}
                                            href={node?.href}
                                            ctaText={node?.ctaText}
                                            description={node?.description}
                                            packageBackground={packageBackground}
                                            packageTextColor={packageTextColor}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}