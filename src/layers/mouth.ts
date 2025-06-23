import type { SvgProps } from "../types";

export function mouth({
  mouthVariant,
  mouthFill,
  faceStroke,
  strokeWidth,
}: SvgProps) {
  switch (mouthVariant) {
    case 1:
      return `
        <g
         inkscape:label="mouth1"
         transform="translate(0.54095822,-0.06692919)">
        <path
           style="display:inline;fill:${mouthFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
           d="m 80.698632,126.42141 c 4.653579,-2.614 11.106088,-6.2003 13.596546,-6.23339 5.584534,1.59891 8.322732,1.82986 13.535842,-0.067 2.46281,0.37826 7.15978,3.65215 11.47209,6.23338 -7.76156,1.78081 -12.16347,4.38847 -18.51315,4.28964 -6.138739,-0.10117 -10.499341,-2.46497 -20.091328,-4.22264 z"
           id="path12-5"
           inkscape:label="mouth-back"
           sodipodi:nodetypes="cccccc" />
        <path
           style="display:inline;fill:none;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
           d="m 81.900681,126.1625 c 6.314124,-0.75728 10.361516,-2.05523 13.067528,-1.85693 2.602226,0.45191 3.604312,1.04159 6.105741,0.89404 2.42798,-0.0148 3.4366,-0.78502 5.93571,-1.25347 2.16422,0.0111 6.84497,0.98775 11.59277,2.09858"
           id="path11-8"
           sodipodi:nodetypes="ccccc"
           inkscape:label="mouth-front" />
      </g>
      `;
    case 2:
      return `
        <g
         inkscape:label="mouth2">
        <path
           style="display:inline;fill:${mouthFill};fill-opacity:1;stroke:none;stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
           d="m 100.48073,121.60954 c 6.59735,-0.005 10.89954,2.1974 18.74581,4.05577 -7.97472,2.6996 -12.0869,5.07756 -18.43658,4.97873 -6.138739,-0.10117 -11.494693,-2.12341 -19.938197,-4.9883 7.861524,-1.59452 12.226739,-4.05171 19.628967,-4.0462 z"
           id="path12"
           inkscape:label="mouth-back"
           sodipodi:nodetypes="ccccc" />
        <path
           style="display:inline;fill:none;fill-opacity:1;stroke:${faceStroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-opacity:1"
           d="m 82.816114,125.68029 c 6.602098,2.1392 10.209017,-1.11301 18.257836,-0.48068 7.98826,-0.70519 10.82029,2.47534 16.69306,0.52353"
           id="path11"
           sodipodi:nodetypes="ccc"
           inkscape:label="mouth-front" />
      </g>
      `;
  }
}
