import { alterHexColor } from "./colors";
import type { SvgProps, VisageConfig } from "./types";

export * from "./types";

export function visage(selector: string, cfg: VisageConfig) {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  const svgProps: SvgProps = {
    ...cfg,
    faceStroke: alterHexColor(cfg.faceFill, 0.2),
    bodyStroke: alterHexColor(cfg.bodyFill),
    hairStroke: alterHexColor(cfg.hairFill, -0.1),
    mouthFill: alterHexColor(cfg.faceFill, 0.1),
  };

  element.innerHTML = `
      <div class="visage ${cfg.rounded ? "rounded" : ""} ">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          ${background(svgProps)}
          ${neck(svgProps)}
          ${body(svgProps)}
          ${ears(svgProps)}
          ${face(svgProps)}
          ${mouth(svgProps)}
          ${eyes(svgProps)}
          ${nose(svgProps)}
          ${eyeBrows(svgProps)}
          ${hair(svgProps)}
        </svg>
      </div>
    `;
}

function background({ backgroundFill }: SvgProps) {
  return `<rect x=0 y=0 width="100%" height="100%" fill="${backgroundFill}" />`;
}

function neck({ faceFill, faceStroke, strokeWidth }: SvgProps) {
  return `
    <path
      style="display:inline;fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
      d="m 76.005531,127.85816 c 0.248293,17.35831 -0.682933,28.81046 -6.168924,33.62064 6.410769,11.05354 19.352892,13.41467 31.461513,13.26319 9.96313,0.15067 19.11036,-2.33567 28.22283,-12.80052 -3.73532,-2.615 -7.616,-16.61344 -7.86538,-33.77486 z"
      id="path23"
      sodipodi:nodetypes="cccccc"
      inkscape:label="neck" />
  `;
}

function body({ bodyFill, bodyStroke, strokeWidth }: SvgProps) {
  return `
    <path
       style="fill:${bodyFill};fill-opacity:1;stroke:${bodyStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
       d="m 72.921069,154.69298 c 2.454068,10.11101 16.587666,15.27122 27.760161,15.42231 11.01469,0.34009 20.77219,-4.79753 25.90948,-14.80542 15.62794,1.95349 42.66762,7.3185 47.03805,10.17873 5.63545,4.6363 13.00856,30.38268 13.88009,40.56068 L 14.933181,205.5866 c 0.107567,-8.38381 7.310716,-36.11098 12.800518,-39.94378 4.921763,-3.66046 26.793482,-9.30132 45.18737,-10.94984 z"
       id="path24"
       inkscape:label="shirt"
       sodipodi:nodetypes="cccccccc" />
  `;
}

function ears({ faceFill, faceStroke, strokeWidth }: SvgProps) {
  return `
   <g
       id="g27"
       inkscape:label="ear-left"
       transform="matrix(1.0337698,0,0,1.1204102,1.9834788,-15.907755)">
      <path
         style="fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 51.047849,86.234517 c -0.502127,-2.693846 -1.602071,-4.897613 -4.318246,-4.472469 -2.664129,0.845723 -4.575379,9.717569 -4.164026,15.88498 0.295298,5.833802 4.016022,11.630712 6.323148,14.342752 2.916741,2.2796 4.70446,-0.74429 4.164025,-4.6267 z"
         id="path20"
         inkscape:label="ears-left"
         sodipodi:nodetypes="cccccc" />
      <path
         style="fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 50.833828,90.019384 c -0.691269,-2.343412 -2.023838,-4.869344 -3.326093,-4.525666 -2.050017,1.067033 -2.516835,5.171238 -2.835357,8.015338 -0.414498,4.587853 0.30669,7.321934 1.199576,9.160384"
         id="path21"
         sodipodi:nodetypes="cccc"
         inkscape:label="ears-left-2" />
      <path
         style="fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 51.324563,93.836213 c -0.684399,-0.970177 -1.568456,-1.141723 -2.453674,-1.308626 -0.90971,0.420567 -1.091462,1.436738 -0.872418,2.780831 0.715665,2.123186 1.165633,2.253642 1.690309,2.944408"
         id="path22"
         sodipodi:nodetypes="cccc"
         inkscape:label="ears-left-3" />
    </g>
    <g
       id="g26"
       inkscape:label="ear-right"
       transform="matrix(1.1507993,0,0,1.1289048,-26.536577,-14.604843)">
      <path
         style="fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 148.16861,84.523542 c 0.50213,-2.693846 1.60207,-4.897613 4.31825,-4.472469 2.66413,0.845723 4.57538,9.717569 4.16402,15.88498 -0.29529,5.833807 -4.01602,11.630717 -6.32314,14.342757 -2.91675,2.2796 -4.70446,-0.74429 -4.16403,-4.6267 z"
         id="path20-1"
         inkscape:label="ears-left"
         sodipodi:nodetypes="cccccc" />
      <path
         style="fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 148.38263,88.308409 c 0.69127,-2.343412 2.02384,-4.869344 3.3261,-4.525666 2.05001,1.067033 2.51683,5.171238 2.83535,8.015338 0.4145,4.587853 -0.30669,7.321935 -1.19957,9.160389"
         id="path21-1"
         sodipodi:nodetypes="cccc"
         inkscape:label="ears-left-2" />
      <path
         style="fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 147.8919,92.125238 c 0.6844,-0.970177 1.56845,-1.141723 2.45367,-1.308626 0.90971,0.420567 1.09146,1.436738 0.87242,2.780831 -0.71567,2.123186 -1.16563,2.253642 -1.69031,2.944408"
         id="path22-5"
         sodipodi:nodetypes="cccc"
         inkscape:label="ears-left-3" />
    </g>
  `;
}

function face({ faceFill, faceStroke, strokeWidth }: SvgProps) {
  return `
    <path
       style="display:inline;fill:${faceFill};fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
       d="m 53.58118,85.540124 c -0.176384,28.278866 21.815641,66.387686 46.84563,65.710786 26.69502,0.27134 44.89621,-37.08713 45.02374,-65.859896 C 145.01732,53.007973 132.02808,30.652511 100.71865,31.265329 70.368937,31.619344 53.506084,48.866397 53.58118,85.540124 Z"
       id="path5"
       sodipodi:nodetypes="ccccc"
       inkscape:label="face" />
  `;
}

function mouth({ mouthFill, faceStroke, strokeWidth }: SvgProps) {
  return `
    <g
       id="g33"
       inkscape:label="mouth">
      <path
         style="fill:${mouthFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 80.698632,126.42141 c 4.653579,-2.614 11.106088,-6.2003 13.596546,-6.23339 5.584534,1.59891 8.322732,1.82986 13.535842,-0.067 2.46281,0.37826 7.15978,3.65215 11.47209,6.23338 -7.76156,1.78081 -12.16347,4.38847 -18.51315,4.28964 -6.138739,-0.10117 -10.499341,-2.46497 -20.091328,-4.22264 z"
         id="path12"
         inkscape:label="mouth-back"
         sodipodi:nodetypes="cccccc" />
      <path
         style="display:inline;fill:none;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 81.611355,125.68029 c 6.507008,1.17156 9.99164,-1.2247 12.697652,-1.0264 2.602226,0.45191 4.675426,0.45789 6.764943,0.54572 2.1926,0.044 4.32094,-0.4483 6.82005,-0.91675 2.16422,0.0111 5.76775,2.48343 10.51555,1.27965"
         id="path11"
         sodipodi:nodetypes="ccccc"
         inkscape:label="mouth-front" />
    </g>
  `;
}

function eyes({ eyesFill, faceStroke, strokeWidth }: SvgProps) {
  return `
    <g
       id="g25"
       inkscape:label="eye-left"
       transform="matrix(0.84363854,0,0,0.83536032,14.406408,9.5140885)">
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
         style="display:inline;fill:#000000;fill-opacity:1;stroke-width:${strokeWidth};stroke-linecap:round"
         id="path8"
         cx="78.965813"
         cy="90.309639"
         inkscape:label="eye-pupil-left"
         r="2.6639156" />
      <ellipse
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         id="path18"
         cx="77.756042"
         cy="88.706573"
         rx="0.6102773"
         ry="0.5876919"
         inkscape:label="eye-pupil-hl-left" />
    </g>
    <g
       id="g25-5"
       inkscape:label="eye-left"
       transform="matrix(-0.84363854,0,0,0.83536032,184.84424,9.5560391)">
      <path
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         d="m 90.997114,91.6894 c -2.150123,-3.575432 -6.232833,-6.50518 -11.412509,-7.017154 -8.019037,0.0079 -12.47229,4.537228 -15.576535,7.634044 5.198644,1.895461 10.442504,3.410619 16.039205,3.315796 4.38569,-0.573972 7.974157,-1.746316 10.949839,-3.932686 z"
         id="path17-1"
         sodipodi:nodetypes="ccccc"
         inkscape:label="eye-left" />
      <circle
         style="display:inline;fill:${eyesFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
         id="path5-1-4"
         cx="-78.917717"
         cy="90.381569"
         transform="scale(-1,1)"
         inkscape:label="eye-pupil-left"
         r="4.7999616" />
      <circle
         style="display:inline;fill:#000000;fill-opacity:1;stroke-width:${strokeWidth};stroke-linecap:round"
         id="path8-6"
         cx="78.965813"
         cy="90.309639"
         inkscape:label="eye-pupil-left"
         r="2.6639156" />
      <ellipse
         style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
         id="path18-0"
         cx="80.212059"
         cy="88.739212"
         rx="0.6102773"
         ry="0.5876919"
         inkscape:label="eye-pupil-hl-left" />
    </g>
  `;
}

function nose({ faceStroke, strokeWidth }: SvgProps) {
  return `
      <path
       id="path16"
       style="display:inline;fill:none;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
       d="m 104.53132,100.10885 c 0.65888,1.65482 2.51866,1.89145 3.87758,3.11632 1.21302,1.09338 1.96428,3.18572 2.09904,4.42577 -0.67152,1.34197 -2.35948,2.2072 -3.36097,2.83055 m -14.792184,-1.79842 c 4.054089,0.99358 2.367425,3.18594 5.089364,4.16402 1.804604,0.36519 3.34622,0.50595 4.58813,0.30846 2.59493,-0.9267 2.26232,-3.90024 4.81948,-4.39536 m -15.05934,1.3825 c -1.113534,-0.70898 -4.085216,-1.33528 -3.597781,-3.03542 0.380864,-1.25345 0.934898,-3.01235 3.492943,-4.59093 1.797453,-1.10922 2.378055,-2.881234 3.000868,-6.229804 l 0.786616,-12.122678"
       inkscape:label="nose" />
  `;
}

function hair({ hairFill, hairStroke, strokeWidth }: SvgProps) {
  return `
      <path
       style="display:inline;fill:${hairFill};fill-opacity:1;stroke:${hairStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
       d="m 53.217477,79.171901 c 4.814835,-17.361746 9.910788,-31.872083 25.736321,-37.295853 3.986186,5.182184 10.809027,8.327862 21.374232,8.397018 10.76357,0.366353 17.25633,-1.973518 21.91949,-7.742705 16.74896,4.705374 19.54217,22.011047 23.22812,38.386376 2.3541,-28.372354 -4.93809,-56.624485 -45.515403,-56.580714 -37.371069,0.192804 -47.736446,26.051457 -46.74276,54.835878 z"
       id="path19"
       inkscape:label="hair"
       sodipodi:nodetypes="ccccccc" />
  
  `;
}

function eyeBrows({ hairFill }: SvgProps) {
  return `
      <path
       id="path20-3"
       style="display:inline;fill:${hairFill};fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-opacity:1"
       d="m 108.14991,78.054831 19.8475,-4.034933 c 2.05911,0.223754 5.90258,2.424749 8.94228,4.034933 -1.14505,-2.835358 -4.70924,-7.475045 -8.17892,-9.8147 -2.81718,-0.436208 -23.22315,2.282448 -23.66432,3.598725 -0.44616,2.207719 0.95874,6.10595 3.05346,6.215975 z M 90.374607,77.849106 70.527105,73.814173 c -2.05911,0.223754 -5.902585,2.424749 -8.942279,4.034933 1.145048,-2.835358 4.709233,-7.475045 8.178914,-9.8147 2.817182,-0.436208 23.223151,2.282448 23.66433,3.598725 0.446156,2.207719 -0.958743,6.10595 -3.053463,6.215975 z"
       inkscape:label="eyebrows"
       sodipodi:nodetypes="cccccccccccc" />
  `;
}
