// SWIPER STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// STYLE
import styles from "./main.module.css";

// IMAGES
import img01 from "../../../public/img01.webp";
import img02 from "../../../public/img02.webp";
import img03 from "../../../public/img03.webp";

// SWIPER REACT
import { Swiper, SwiperSlide } from "swiper/react";

// REQUIRED MODULES
import { Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <main id="testimonials" className={styles.container}>
      <Swiper
        loop={true}
        className="mySwiper"
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className={styles.content}>
            <div>
              <h3 className={styles.name}>Name</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, labore!
              </p>
            </div>
            <img src={img01} className={styles.image} alt="image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.content}>
            <div>
              <h3 className={styles.name}>Name</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, labore!
              </p>
            </div>
            <img src={img02} className={styles.image} alt="image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.content}>
            <div>
              <h3 className={styles.name}>Name</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, labore!
              </p>
            </div>
            <img src={img03} className={styles.image} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
