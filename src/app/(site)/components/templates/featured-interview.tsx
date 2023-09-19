import Styles from "./feature-section.module.css"
import * as HeroIcons from '@heroicons/react/24/outline';
import HeaderSection from "./header-section";
import Link from "next/link";
import ContentEditor from "../util/content-editor";
import Image from "next/image";

interface Props {
    backgroundStyles: any;
    columnNumber: number;
    blocks: any;
    content: any;
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    gridBackgroundColor: any;
    offsetTop: boolean;
    paddingTop: string;
    paddingBottom: string;
}

export default function FeaturedInterview({
    backgroundStyles,
    columnNumber,
    blocks,
    content,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    gridBackgroundColor,
    offsetTop,
    paddingTop,
    paddingBottom,
}: Props) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div className={`${offsetTop && '-mt-32 relative'}`} style={allStyles}>
            <div className={`container`}>
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
                <div className={Styles.featureGridWrap}>
                    <div className={`grid rounded-sm grid-cols-1 lg:grid-cols-${columnNumber} gap-10 ${content && 'mt-16'}`}>
                        {blocks?.map((node: any, i:number) => {
                            return (
                                <div className="mx-auto max-w-2xl" key={i}>
                                    <div className="mt-10 flex items-center gap-x-6 flex-col">
                                        <div className="h-96 relative w-full">
                                            <Image
                                                className="w-full bg-gray-50 h-full object-cover"
                                                src={node?.image?.asset?.url}
                                                alt={node?.image?.asset?.altText}
                                                fill={true}
                                                placeholder={node?.image?.asset?.lqip ? 'blur' : 'empty'}
                                                blurDataURL={node?.image?.asset?.lqip}
                                            />
                                        </div>
                                        <div className="leading-6 mt-6 text-left">
                                            <div className="text-[#264495] mt-6 font-bold text-xl mb-3">{node?.value}</div>
                                            <div className="text-gray-900 content">
                                                {node?.content &&
                                                    <ContentEditor
                                                        content={node?.content}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
