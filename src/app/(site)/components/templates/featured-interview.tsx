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
                    <dl className={`grid rounded-sm grid-cols-1 lg:grid-cols-${columnNumber} gap-10 ${content && 'mt-16'}`}>
                        {blocks?.map((node: any) => {
                            return (
                                <figure className="mx-auto max-w-2xl">
                                    <blockquote className="mt-10 text-lg font-semibold leading-8 tracking-tight text-gray-900 sm:leading-9">
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus!
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-x-6">
                                        <img
                                            className="h-12 w-12 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                                            alt=""
                                        />
                                        <div className="text-sm leading-6">
                                            <div className="font-semibold text-gray-900">Name Interview</div>
                                            <div className="mt-0.5 text-gray-600">subtitle position</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            )
                        })}
                    </dl>
                </div>
            </div>
        </div>
    )
}