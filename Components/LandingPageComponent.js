import React from "react";
import styles from "./LandingPageComponent.module.css";
import Video from "next-video";
import vid from "@/videos/videoApparel.mp4";
import Link from "next/link";

const LandingPageComponent = () => {
  return (
    <section className={styles.main}>
      <div className={`${styles.container} ${styles.row}`}>
        <div className={`${styles["col-md-6"]} ${styles["product-disc"]}`}>
          <h2>Bomber Jacket</h2>
          <p>
            Crafted from durable materials like leather, nylon, or polyester,
            these jackets offer both protection against the elements and a touch
            of retro charm with their classic ribbed hem and cuffs. From casual
            outings to polished ensembles, bomber jackets exude versatility,
            effortlessly complementing a variety of outfits.
          </p>
          <Link href={"/products"}>
            <button className={styles.button}>Shop Now</button>
          </Link>
        </div>

        <div className={styles["col-md-6"]}>
          <div className={styles.video}>
            {/* <Video src={vid} loop controls={false} /> */}
            <video width={400} height={400} autoPlay muted loop>
              <source src="/video/videoApparel.mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageComponent;
