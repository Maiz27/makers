'use client';
import { useState, useEffect } from 'react';

const useDominantColor = (imageUrls: string[]): [string[], string[]] => {
  const [bgColors, setBgColors] = useState<string[]>([]);
  const [textColors, setTextColors] = useState<string[]>([]);

  useEffect(() => {
    const getColorForImage = (imageUrl: string) => {
      const image = new Image();
      image.crossOrigin = 'anonymous'; // Enable cross-origin access if necessary
      image.src = imageUrl;

      return new Promise<{ bgColor: string; textColor: string }>((resolve) => {
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            return;
          }

          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);

          const imageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          ).data;
          const [avgR, avgG, avgB] = calculateDominantColor(imageData);

          const luminance = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;

          const textColor = luminance > 128 ? 'text-black' : 'text-white';
          const bgColor = `rgb(${avgR},${avgG},${avgB})`;

          resolve({ bgColor, textColor });
        };
      });
    };

    Promise.all(imageUrls.map(getColorForImage)).then((results) => {
      const extractedBgColors = results.map((result) => result.bgColor);
      const extractedTextColors = results.map((result) => result.textColor);

      setBgColors(extractedBgColors);
      setTextColors(extractedTextColors);
    });
  }, [imageUrls]);

  return [bgColors, textColors];
};

export default useDominantColor;

const calculateDominantColor = (imageData: Uint8ClampedArray) => {
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;

  for (let i = 0; i < imageData.length; i += 4) {
    totalR += imageData[i];
    totalG += imageData[i + 1];
    totalB += imageData[i + 2];
  }

  const pixelCount = imageData.length / 4;
  const avgR = Math.round(totalR / pixelCount);
  const avgG = Math.round(totalG / pixelCount);
  const avgB = Math.round(totalB / pixelCount);

  return [avgR, avgG, avgB];
};
