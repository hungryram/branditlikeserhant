import Styles from "./feature-section.module.css"
import * as HeroIcons from '@heroicons/react/24/outline';
import HeaderSection from "./header-section";
import Link from "next/link";
import ContentEditor from "../util/content-editor";

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

export default function FeaturedGridQuotes({
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
                    <dl className={`grid rounded-sm grid-cols-1 lg:grid-cols-${columnNumber} gap-10 ${content && 'mt-16'}`}>
                        {blocks?.map((node: any) => {
                            return (
                                <blockquote className="mt-6 md:flex md:flex-grow md:flex-col shadow-lg p-10 relative" key={node?._key} style={{
                                    backgroundColor: gridBackgroundColor
                                }}>
                                    <svg
                                        className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-[#121276]"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <div className="relative text-lg font-medium md:flex-grow content">
                                        {node?.content &&
                                            <div className="text-slate-600 font-light" style={{
                                                color: node?.contentColor?.hex
                                            }}>
                                                <ContentEditor
                                                    content={node.content}
                                                />
                                            </div>
                                        }
                                    </div>
                                </blockquote>
                            )
                        })}
                    </dl>
                </div>
            </div>
        </div>
    )
}
