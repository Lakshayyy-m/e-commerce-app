import React from "react";
import styles from "./LandingPageComponent.module.css";
import Video from "next-video";
import vid from "@/videos/videoApparel.mp4";

const LandingPageComponent = () => {
  return (
    <section className={styles.main}>
      <div className={`${styles.container} ${styles.row}`}>
        <div className={`${styles["col-md-6"]} ${styles["product-disc"]}`}>
          <h2>Bomber Jacket</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            facere at expedita deserunt exercitationem consequatur libero
            molestiae culpa illo eius.
          </p>
          <button className={styles.button}>Shop Now</button>
        </div>

        <div className={styles["col-md-6"]}>
          <div className={styles.video}>
            <Video src={vid} loop controls={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageComponent;
