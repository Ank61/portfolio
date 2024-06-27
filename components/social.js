import Image from "next/image";
import XLogo from "../app/images/x.png";
import linkedLogo from "../app/images/linkedin.png";
import githubLogo from "../app/images/github.png";

export default function Social() {
  return (
    <div class="flex flex-row justify-between items-center mt-6">
      <div class="flex flex-row gap-x-3">
        <a target="_blank" rel="noreferrer" href="#">
          <Image
            alt="Twitter"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            src={XLogo}
            style="color: transparent;"
            className="mt-1"
          />
        </a>
        <a target="_blank" rel="noreferrer" href="#">
          <Image
            alt="Github"
            loading="lazy"
            width="25"
            height="25"
            decoding="async"
            data-nimg="1"
            src={githubLogo}
            style="color: transparent;"
            // className="mb-4"
          />
        </a>
        <a target="_blank" rel="noreferrer" href="#">
          <Image
            alt="Linkedin"
            loading="lazy"
            width="25"
            height="25"
            decoding="async"
            data-nimg="1"
            src={linkedLogo}
            style="color: transparent;"
            className="mt-0.5"
          />
        </a>
      </div>
    </div>
  );
}
