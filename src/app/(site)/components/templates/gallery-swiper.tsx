'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderSection from "./header-section";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

interface Props {
    content: string;
    images: any
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    backgroundStyles: any;
    disablePagination: boolean;
    disableNavigation: boolean;
    slideNumber: number
    navigationColors: string;
    paddingTop: string;
    paddingBottom: string;
}

const GallerySwiper = ({
    content,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    backgroundStyles,
    images,
    disablePagination,
    navigationColors,
    disableNavigation,
    slideNumber,
    paddingTop,
    paddingBottom,
}: Props) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const lightboxRef = useRef<HTMLDivElement>(null);

    const openLightbox = (image: string, index: number) => {
        setLightboxOpen(true);
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage("");
        setCurrentIndex(0);
    };

    const handlePrevImage = () => {
        if (currentIndex > 0) {
            setSelectedImage(images[currentIndex - 1]?.asset?.url);
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextImage = () => {
        if (currentIndex < images.length - 1) {
            setSelectedImage(images[currentIndex + 1]?.asset?.url);
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        if (lightboxOpen && lightboxRef.current) {
            lightboxRef.current.focus();
        }
    }, [lightboxOpen]);

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
      }
    
      const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div style={allStyles}>
            <div>
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
                <Swiper
                    slidesPerView={slideNumber ? slideNumber : 1}
                    spaceBetween={10}
                    effect={"slide"}
                    pagination={disablePagination ? false : true}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        enabled: disableNavigation ? false : true,
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    className={`md:columns-3 columns-2 gap-4 ${content && 'mt-16'}`}
                    role="region"
                    aria-label="Image Gallery"
                    a11y={{
                        prevSlideMessage: 'Previous slide',
                        nextSlideMessage: 'Next slide',
                        firstSlideMessage: 'This is the first slide',
                        lastSlideMessage: 'This is the last slide',
                    }}
                    autoplay={{
                        delay: 3000
                    }}
                    breakpoints={{
                        // When window width is >= 1024px (desktop)
                        1024: {
                            slidesPerView: slideNumber ? slideNumber : 1,
                            spaceBetween: 30,
                        },
                        // When window width is >= 768px (iPad)
                        768: {
                            slidesPerView: slideNumber < 2 ? 1 : 2,
                            spaceBetween: 20,
                        },
                        // When window width is < 768px (iPhone)
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                >
                    <div className="swiper-button image-swiper-button-next absolute right-0 top-1/2 flex items-center justify-center z-50">
                        <IoIosArrowForward className="text-3xl" style={{
                            color: navigationColors
                        }} />
                    </div>
                    <div className="swiper-button image-swiper-button-prev absolute left-0 top-1/2 flex items-center justify-center z-50">
                        <IoIosArrowBack className="text-3xl" style={{
                            color: navigationColors
                        }} />
                    </div>
                    {images?.map((image: any, index: number) => (
                        <SwiperSlide
                            key={image._key}
                            className="mb-4"
                        >
                            <Image
                                src={image?.asset?.url}
                                alt={image?.asset?.altText}
                                width={1000}
                                height={800}
                                className={`w-full object-cover ${slideNumber === 1 ? 'md:h-[80vh] h-96' : 'h-96'}`}
                                placeholder={image?.asset?.lqip ? 'blur' : 'empty'}
                                blurDataURL={image?.asset?.lqip}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
};

export default GallerySwiper;
