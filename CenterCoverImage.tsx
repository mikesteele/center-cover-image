import React from "react";
import "./styles.css";
import { css } from "emotion";
import cn from "classnames";

const Image = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Wrapper = css`
  overflow: hidden;
  position: relative;
`;

const Portrait = css`
  max-width: 100%;
`;

const Landscape = css`
  max-height: 100%;
`;

interface Props {
  alt: string;
  className: string;
  src: string;
  srcIsPortrait: boolean;
}

const CenterCoverImage = (props: Props) => {
  const { alt, className, src, srcIsPortrait } = props;
  const imageClassName = cn(Image, {
    [Portrait]: srcIsPortrait,
    [Landscape]: !srcIsPortrait
  });
  return (
    <div className={cn(Wrapper, className)}>
      <img src={src} alt={alt} className={imageClassName} />
    </div>
  );
};

const example = css`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <CenterCoverImage
      srcIsPortrait
      className={example}
      alt="hey"
      src="https://picsum.photos/2000/3000"
    />
  );
}
