import GamesSection from "./GamesSection"
import MobileAppsSection from "./MobileAppsSection"
import SimulationsSection from "./SimulationsSection"
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton
} from '../../components/EmblaCarouselArrowButtons'


const MyProjectsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
        


    const slides = [
        <GamesSection />,
        <SimulationsSection/>,
        <MobileAppsSection />
    ]
    return (
        <section className="embla py-20 bg-gray-900 select-none">
                <h2 className="flex flex-row items-baseline justify-center text-3xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">
                    <PrevButton className="flex mr-2 w-20 transform hover:-translate-x-2 hover:scale-110 transition-transform duration-300" emblaApi={emblaApi} />
                    My Side Projects
                    <NextButton className="flex ml-2 w-20 justify-end transform hover:translate-x-2 hover:scale-110 transition-transform duration-300" emblaApi={emblaApi} />
                </h2>
            <div className="embla__viewport mx-auto px-4" ref={emblaRef}>
                <div className="embla__container">
                    {
                        slides.map((slide, index) => (
                            <div className="embla__slide min-w-full" key={index}>
                                {slide}
                            </div>
                        ))
                }
                </div>
                <div className="embla__controls">
                    <div className="embla__buttons">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProjectsSection