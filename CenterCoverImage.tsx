import React from "react";
import { css } from "emotion";
import cn from "classnames";

const Image = css`
  position: absolute;
  /*
    This works because top and left percentages are in relation to parent size, 
    but transform percentages are in relation to the element's own size.
  */
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
  /*
    Is the source image portrait-sized, having more height than width?
    Note that this refers to the source image itself, not the size you want it to be.
  */
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
