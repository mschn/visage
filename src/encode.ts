import type { VisageConfig } from "./types";

export async function encodeConfig(config: VisageConfig) {
  const str = [
    config.backgroundFill.substring(1),
    config.bodyFill.substring(1),
    config.faceFill.substring(1),
    config.eyesFill.substring(1),
    config.hairFill.substring(1),
    config.hairVariant,
    config.eyebrowsVariant,
    config.eyesVariant,
    config.mouthVariant,
    config.faceVariant,
  ].join(",");
  const compressed = await compressString(str);
  // TODO is gzip really efficient at this size
  //   console.log(str.length, str);
  //   console.log(btoa(str).length, btoa(str))
  //   console.log(compressed.length, compressed);

  return compressed;
}

export async function decodeConfig(config: string): Promise<VisageConfig> {
  const str = await decompressString(config);
  const s = str.split(",");
  // TODO add some validation here and use default value when values are invalid
  return {
    backgroundFill: s[0],
    bodyFill: s[1],
    faceFill: s[2],
    eyesFill: s[3],
    hairFill: s[4],
    hairVariant: parseInt(s[5]),
    eyebrowsVariant: parseInt(s[6]),
    mouthVariant: parseInt(s[7]),
    eyesVariant: parseInt(s[8]),
    faceVariant: parseInt(s[9]),
  };
}

export async function compressString(str: string): Promise<string> {
  const textEncoder = new TextEncoder();
  const encodedData: Uint8Array = textEncoder.encode(str); // Convert string to Uint8Array

  const readableStream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encodedData);
      controller.close();
    },
  });

  const compressedStream: ReadableStream<Uint8Array> =
    readableStream.pipeThrough(new CompressionStream("gzip"));
  const compressedResponse: Response = new Response(compressedStream);
  const compressedData = await compressedResponse.arrayBuffer();
  return btoa(String.fromCharCode(...new Uint8Array(compressedData)));
}

export async function decompressString(compressedStr: string): Promise<string> {
  const buffer = Uint8Array.from(atob(compressedStr), (c) =>
    c.charCodeAt(0)
  ).buffer;
  const readableStream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(new Uint8Array(buffer));
      controller.close();
    },
  });

  const decompressedStream: ReadableStream<Uint8Array> =
    readableStream.pipeThrough(new DecompressionStream("gzip"));
  const decompressedResponse: Response = new Response(decompressedStream);
  const decompressedBuffer: ArrayBuffer =
    await decompressedResponse.arrayBuffer();

  const textDecoder = new TextDecoder();
  return textDecoder.decode(decompressedBuffer);
}
