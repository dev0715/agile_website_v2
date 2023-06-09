import React from "react";
import Link from "next/link";
import Image from "next/image";

import classnames from "classnames/bind";

import Logo from "/public/images/dragonfly_logo_home.png";

import * as styles from "./SignUpHero.module.scss";

const cx = classnames.bind(styles);

const signUpHeroContent = {
  title:
    "Railflow in the only solution in the market that offers out of the box solutions for all your integration needs. Integrate CICD workflows, test frameworks, open source and commerical tools without wasting your precious engineering resources.",
  features: [
    "14 day free trial. No credit card required",
    "Access to free enterprise support (real humans)",
    "Happier and more relaxed QA teams and management",
    "Prepare to super charge your engineering productivity",
  ],
};
const SignUpHero = () => {
  return (
    <div className={cx("signUpHero")}>
      <Link href="/dragonfly">
        <a className={cx("signUpHeroLogo")}>
          <div className={cx("signUpHeroLogo_image")}>
            <img src="/images/dragonfly_logo_home.png" alt="logo" width={"100%"} />
          </div>
        </a>
      </Link>
      <h3 className={cx("signUpHero_title")}>{signUpHeroContent.title}</h3>

      <ul className={cx("signUpHero_featureContainer")}>
        {signUpHeroContent.features.map((content, idx) => (
          <li key={idx} className={cx("signUpHeroFeature")}>
            <div className={cx("signUpHeroFeature_icon")}>
              <Image
                src={"/check_blue.svg"}
                alt="check icon"
                width={16}
                height={16}
              />
            </div>
            {content}
          </li>
        ))}
      </ul>
      <p className={cx("signUpHero_desc")}>{signUpHeroContent.desc}</p>
    </div>
  );
};

export default SignUpHero;
