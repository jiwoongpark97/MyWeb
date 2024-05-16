import React, { useRef, useState, useEffect } from 'react';

interface ImageSmudgeProps {
  imageUrl1: string; // URL of the first image (to be revealed)
  imageUrl2: string; // URL of the second image (to be smudged over)
}

export const ImageSmudge: React.FC<ImageSmudgeProps> = ({ imageUrl1, imageUrl2 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageData1, setImageData1] = useState<ImageData | null>(null);
  const [imageData2, setImageData2] = useState<ImageData | null>(null);
  const [isSmudging, setIsSmudging] = useState(false);
  const [brushRadius, setBrushRadius] = useState(100); // Adjust brush radius in pixels

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image1 = new Image();
    image1.onload = () => {
      canvas.width = image1.width;
      canvas.height = image1.height;
      ctx.drawImage(image1, 0, 0);
      const data = ctx.getImageData(0, 0, image1.width, image1.height);
      setImageData1(data);
    };
    image1.src = imageUrl1;

    const image2 = new Image();
    image2.onload = () => {
      const data = ctx.getImageData(0, 0, image1.width, image1.height);
      setImageData2(data);
    };
    image2.src = imageUrl2;
  }, [imageUrl1, imageUrl2]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsSmudging(true);
    handleSmudge(event);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isSmudging) {
      handleSmudge(event);
    }
  };

  const handleMouseUp = () => {
    setIsSmudging(false);
  };

  const handleSmudge = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !imageData1 || !imageData2) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = x;
    const centerY = y;

    const data2 = imageData2.data;
    const revealedPixels = []; // Keep track of revealed pixels

    for (let i = 0; i < imageData1.data.length; i += 4) {
      const pixelX = i / 4 % canvas.width;
      const pixelY = Math.floor(i / 4 / canvas.width);

      const distanceFromCenter = Math.sqrt(
        Math.pow(pixelX - centerX, 2) + Math.pow(pixelY - centerY, 2)
      );

      if (distanceFromCenter <= brushRadius) {
        // Clear the first image data within the circle
        imageData1.data[i] = 0; // Red channel
        imageData1.data[i + 1] = 0; // Green channel
        imageData1.data[i + 2] = 0; // Blue channel

        // Reveal the second image data with full opacity
        data2[i] = 255; // Red channel
        data2[i + 1] = 255; // Green channel
        data2[i + 2] = 255; // Blue channel

        revealedPixels.push(i); // Mark pixel as revealed
      }
    }

    // Check if reveal threshold is met
    const revealedRatio = revealedPixels.length / (canvas.width * canvas.height);
    console.log(revealedRatio);
    if (revealedRatio >= 0.8) {
      // Fully reveal the second image if threshold is met
      for (let i = 0; i < imageData1.data.length; i += 4) {
        imageData1.data[i] = 0;
        imageData1.data[i + 1] = 0;
        imageData1.data[i + 2] = 0;
      }
    } else {
      // Create a new ImageData object using the imageData1 data and dimensions
      const newImageData = new ImageData(imageData1.data, imageData1.width, imageData1.height);

      // Create a new ImageData object using the data2 array and the dimensions of the canvas
      const newImageData2 = new ImageData(data2, canvas.width, canvas.height);

      // Update the canvas data with both images
      ctx.putImageData(newImageData, 0, 0);
      ctx.putImageData(newImageData2, 0, 0);
    }

    // Update the canvas to reflect changes
    ctx.stroke();
  };


  return (
    <div>
      <canvas ref={canvasRef} width={500} height={300} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
    </div>
  );
}
