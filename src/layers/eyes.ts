import type { SvgProps } from "../types";

export function eyes({ eyesFill, faceStroke, strokeWidth }: SvgProps) {
  return `
   <g
       id="g25"
       inkscape:label="eye-left"
       transform="matrix(0.90527174,0,0,0.89638874,8.7570759,4.3771909)">
      <path
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 90.997114,91.6894 c -2.150123,-3.575432 -6.232833,-6.50518 -11.412509,-7.017154 -8.019037,0.0079 -12.47229,4.537228 -15.576535,7.634044 5.198644,1.895461 10.442504,3.410619 16.039205,3.315796 4.38569,-0.573972 7.974157,-1.746316 10.949839,-3.932686 z"
         id="path17"
         sodipodi:nodetypes="ccccc"
         inkscape:label="eye-left" />
      <circle
         style="display:inline;fill:${eyesFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
         id="path5-1"
         cx="-78.917717"
         cy="90.381569"
         transform="scale(-1,1)"
         inkscape:label="eye-pupil-left"
         r="4.7999616" />
      <circle
         style="display:inline;fill:#000000;fill-opacity:1;stroke-width:1;stroke-linecap:round"
         id="path8"
         cx="78.965813"
         cy="90.309639"
         inkscape:label="eye-pupil-left"
         r="2.6639156" />
      <ellipse
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-opacity:1"
         id="path18"
         cx="77.756042"
         cy="88.706573"
         rx="0.6102773"
         ry="0.5876919"
         inkscape:label="eye-pupil-hl-left" />
    </g>
    <g
       id="g25-2"
       inkscape:label="eye-left"
       transform="matrix(-0.90527174,0,0,0.89638874,189.7045,4.1953829)">
      <path
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 90.997114,91.6894 c -2.150123,-3.575432 -6.232833,-6.50518 -11.412509,-7.017154 -8.019037,0.0079 -12.47229,4.537228 -15.576535,7.634044 5.198644,1.895461 10.442504,3.410619 16.039205,3.315796 4.38569,-0.573972 7.974157,-1.746316 10.949839,-3.932686 z"
         id="path17-4"
         sodipodi:nodetypes="ccccc"
         inkscape:label="eye-left" />
      <circle
         style="display:inline;fill:${eyesFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
         id="path5-1-8"
         cx="-78.917717"
         cy="90.381569"
         transform="scale(-1,1)"
         inkscape:label="eye-pupil-left"
         r="4.7999616" />
      <circle
         style="display:inline;fill:#000000;fill-opacity:1;stroke-width:1;stroke-linecap:round"
         id="path8-3"
         cx="78.965813"
         cy="90.309639"
         inkscape:label="eye-pupil-left"
         r="2.6639156" />
      <ellipse
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-opacity:1"
         id="path18-9"
         cx="77.756042"
         cy="88.706573"
         rx="0.6102773"
         ry="0.5876919"
         inkscape:label="eye-pupil-hl-left" />
    </g>
  `;
}
