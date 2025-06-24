import type { SvgProps } from "../types";

export function eyes({
  eyesVariant,
  eyesFill,
  faceStroke,
  strokeWidth,
  faceFill,
}: SvgProps) {
  switch (eyesVariant) {
    case 1:
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
    case 2:
      return `      <g
         id="g4"
         inkscape:label="eyes-2"
         style="display:inline"
         transform="translate(0.14450123,0.28900247)">
        <g
           id="g25"
           inkscape:label="eye-right"
           transform="matrix(0.90527174,0,0,0.89638874,8.7570759,4.3771909)"
           style="display:inline">
          <rect
             style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             id="rect9"
             width="26.588226"
             height="10.54859"
             x="65.097809"
             y="80.703941"
             transform="matrix(1.1046407,0,0,1.1155874,-9.8330443,-5.2055466)"
             inkscape:label="white" />
          <circle
             style="display:inline;mix-blend-mode:normal;fill:${eyesFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             id="path5-1"
             cx="-78.917717"
             cy="90.381569"
             transform="scale(-1,1)"
             inkscape:label="iris"
             r="4.7999616" />
          <circle
             style="display:inline;fill:#000000;fill-opacity:1;stroke-width:1;stroke-linecap:round"
             id="path8"
             cx="78.965813"
             cy="90.309639"
             inkscape:label="pupil"
             r="2.6639156" />
          <ellipse
             style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-opacity:1"
             id="path18"
             cx="77.756042"
             cy="88.706573"
             rx="0.6102773"
             ry="0.5876919"
             inkscape:label="pupil-hl" />
          <path
             id="rect7"
             style="display:inline;fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             d="M 62.930201,78.030766 V 92.986443 H 79.53133 92.553199 V 78.030766 Z m 19.218262,4.268473 c 4.387892,1.105257 7.01569,2.853132 8.841007,5.278748 -2.693801,1.454083 -6.539697,1.465459 -10.273791,1.35754 -4.877618,-0.103917 -11.108889,-2.547804 -14.37535,-4.489132 3.966195,-1.981194 9.279209,-3.401816 15.808134,-2.147156 z"
             transform="matrix(1.1046407,0,0,1.1155874,-9.6734224,-4.8831391)"
             inkscape:label="outline"
             sodipodi:nodetypes="ccccccccccc" />
          <rect
             style="display:inline;fill:none;fill-opacity:1;stroke:${faceFill};stroke-width:2;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             id="rect8"
             width="32.961929"
             height="16.845793"
             x="59.682312"
             y="82.005692"
             inkscape:label="remove-outside-stroke" />
        </g>
        <g
           id="g25-1"
           inkscape:label="eye-right"
           transform="matrix(-0.90527174,0,0,0.89638874,189.21424,4.6070621)"
           style="display:inline">
          <rect
             style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             id="rect9-9"
             width="26.588226"
             height="10.54859"
             x="65.097809"
             y="80.703941"
             transform="matrix(1.1046407,0,0,1.1155874,-9.8330443,-5.2055466)"
             inkscape:label="white" />
          <circle
             style="display:inline;mix-blend-mode:normal;fill:${eyesFill};fill-opacity:1;stroke:none;stroke-width:1.19916;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             id="path5-1-3"
             cx="-78.917717"
             cy="90.381569"
             transform="scale(-1,1)"
             inkscape:label="iris"
             r="4.7999616" />
          <circle
             style="display:inline;fill:#000000;fill-opacity:1;stroke-width:1;stroke-linecap:round"
             id="path8-1"
             cx="78.965813"
             cy="90.309639"
             inkscape:label="pupil"
             r="2.6639156" />
          <ellipse
             style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-opacity:1"
             id="path18-1"
             cx="-80.274338"
             cy="88.806305"
             rx="0.6102773"
             ry="0.5876919"
             inkscape:label="pupil-hl"
             transform="scale(-1,1)" />
          <path
             id="rect7-4"
             style="display:inline;fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             d="M 62.930201,78.030766 V 92.986443 H 79.53133 92.553199 V 78.030766 Z m 19.218262,4.268473 c 4.387892,1.105257 7.01569,2.853132 8.841007,5.278748 -2.693801,1.454083 -6.539697,1.465459 -10.273791,1.35754 -4.877618,-0.103917 -11.108889,-2.547804 -14.37535,-4.489132 3.966195,-1.981194 9.279209,-3.401816 15.808134,-2.147156 z"
             transform="matrix(1.1046407,0,0,1.1155874,-9.6734224,-4.8831391)"
             inkscape:label="outline"
             sodipodi:nodetypes="ccccccccccc" />
          <rect
             style="display:inline;fill:none;fill-opacity:1;stroke:${faceFill};stroke-width:2;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
             id="rect8-9"
             width="32.961929"
             height="16.845793"
             x="59.682312"
             y="82.005692"
             inkscape:label="remove-outside-stroke" />
        </g>
      </g>`;
  }
}
