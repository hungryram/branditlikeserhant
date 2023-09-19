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

export default function FeaturedGridBox({
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
                    <div className={`grid rounded-sm grid-cols-1 lg:grid-cols-${columnNumber} gap-2 ${content && 'mt-16'}`}>
                        {blocks?.map((node: any) => {

                            const IconComponent = HeroIcons[node.icon as keyof typeof HeroIcons];
                            const blockLink: any = node?.blockLinking?.internalLink
                            const linkUrl =
                                (blockLink?._type === "pages" && `/${node.blockLinking?.internalLink.slug}`) ||
                                (blockLink?._type === "blog" && `/blog/${node.blockLinking?.internalLink.slug}`) ||
                                (blockLink?._type === "legal" && `/legal/${node.blockLinking?.internalLink.slug}`) ||
                                (blockLink?._type === "services" && `/services/${node.blockLinking?.internalLink.slug}`) ||
                                (blockLink?._type === "team" && `/team/${node.blockLinking?.internalLink.slug}`) ||
                                (blockLink?._type === "team" && `/team/${node.blockLinking?.internalLink.slug}`) ||
                                (node.blockLinking?.externalUrl && `${node.blockLinking?.externalUrl}`);
                            return (
                                <div key={node._key} className={`${Styles.featureCardContainer} p-10 content`} style={{
                                    backgroundColor: gridBackgroundColor
                                }}>
                                    <h3 className={`${Styles.featureCard} text-center flex justify-center`} style={{
                                        color: node?.headingColor?.hex
                                    }}>
                                        {node.value}
                                    </h3>
                                    {node?.image?.asset?.url &&
                                        <div className={`relative w-full h-80`}>
                                            <Image
                                                src={node?.image?.asset?.url}
                                                fill={true}
                                                alt={node?.image?.asset?.altText}
                                                className="w-full rounded-sm object-cover h-96"
                                                placeholder={node?.image?.asset?.lqip ? 'blur' : 'empty'}
                                                blurDataURL={node?.image?.asset?.lqip}
                                            />
                                        </div>
                                    }
                                    <dd className={Styles.featureCardContent}>
                                    {node?.subHeading &&
                                            <div className="content text-center" style={{
                                                color: node?.contentColor?.hex
                                            }}>
                                                <ContentEditor
                                                    content={node.subHeading}
                                                />
                                            </div>
                                        }
                                        {node?.content &&
                                            <div className="content" style={{
                                                color: node?.contentColor?.hex
                                            }}>
                                                <ContentEditor
                                                    content={node.content}
                                                />
                                            </div>
                                        }
                                        {node?.button?.text &&
                                            <p className="mt-6">
                                                <Link href={linkUrl ?? '/'} className={`${Styles.featureCardCta}`} aria-label={`Link to ${node?.value}`} style={{
                                                    color: node?.linkColor?.hex
                                                }}>
                                                    {node?.button?.text} <span aria-hidden="true">→</span>
                                                </Link>
                                            </p>
                                        }
                                    </dd>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
