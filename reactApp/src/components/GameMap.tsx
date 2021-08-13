import React, { useCallback, useLayoutEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
// import { default as MyImage } from "../assets/inlineMap.svg";

import SvgFancyMap from "./SvgFancyMap";

interface Props {}

/**
 * Container for the game map. 
 * 
 * Note this react svg components referenced here were generated from raw SVG using the following command.
 * 
 * npx @svgr/cli --ref   --typescript src/assets/fancyMap.svg  > src/components/SvgFancyMap.tsx
 * 
 * @param props 
 */
const GameMap = (props: Props) => {
  const svgRef = useRef(null);

  function findNodeById(list: NodeList, id: string): SVGElement {
    const length = list.length;

    for (let index = 0; index < length; index++) {
      const element = list.item(index) as SVGElement;

      if (element.getAttribute("id") === id) {
        return element;
      }
    }

    return null;
  }

  return (

    <>
      <Button
        onClick={(e) => {
          console.log(svgRef);

          const map = svgRef.current as SVGElement;
          if (map) {
            const land = findNodeById(
              map.childNodes,
              "fancyMap_svg___sea-outlines_"
            );

            console.log(land);

            land.childNodes.forEach((node: SVGElement) => {
              node.style.fill = "#f00";

              // node.style.filter = "url(#shadow)";
            });
          }
          debugger;
        }}
      >
        Test Action
      </Button>
      <h1>Fancy Map</h1>asasdafsdf
      <SvgFancyMap ref={svgRef} />
    </>
  );
};

export default GameMap;
