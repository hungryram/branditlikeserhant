import { urlForImage } from "../../../../../sanity/lib/image"
import getYouTubeID from 'get-youtube-id'
import Youtube from "react-youtube"

const serializers = {
    types: {
        youtube: ({ value }) => {

            const opts = {
                height: `${value.height ?? '600'}`,
                width: `${value.width ?? '400'}`,
                playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                },
            };

            const { url } = value
            const id = getYouTubeID(url)
            return (<Youtube videoId={id} opts={opts} />)
        },
        image: ({ value }) => {
            return (
                <div className={
                    `relative flex ${value.imageAlign == 'left' && 'justify-start' || value.imageAlign == 'center' && 'justify-center' || value.imageAlign == 'right' && 'justify-end'}`
                }>
                    <img src={value.asset !== undefined && urlForImage(value).url()} alt={value.altTag} width={value.imageWidth} className="my-10 mx-4" />
                </div>
            )
        },
        ctaButton: ({ value, children }) => {
            return (
                <div className="my-6">
                    <a href={value.buttonLink} target="_blank" className="primary-button">{value.buttonText}</a>
                </div>
            )
        },
        imageLink: ({ value, children }) => {
            return (
                <div className={`${value?.inline && 'inline-block mx-4 my-2 md:w-36 md:h-36'}`}>
                    <a href={value.buttonLink} target="_blank">
                        <img src={urlForImage(value.image).quality(30).url()} alt={value.altText} width={150} height={150} loading="lazy" className="object-contain" />
                    </a>
                </div>
            )
        }
    },
    marks: {
        link: ({ value, children }) => {
            return (
                <a href={value.href} target={value.newTab ? '_blank' : '_self'} className="accent">{children}</a>
            )
        },
        color: ({ value, children }) => {
            return (
                <span style={{ color: value?.hex }}>{children}</span>
            )
        },
    }
}

export default serializers