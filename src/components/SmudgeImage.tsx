import React, { useRef, useState, useEffect } from 'react';

interface ImageSmudgeProps {
  imageUrl1: string; // URL of the first image (to be revealed)
  imageUrl2: string; // URL of the second image (to be smudged over)
}

export const ImageSmudge: React.FC<ImageSmudgeProps> = ({ imageUrl1, imageUrl2 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageData1, setImageData1] = useState<ImageData | null>(null);
  const [isSmudging, setIsSmudging] = useState(false);


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
    if (!canvas || !imageData1) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const image2 = new Image();
    image2.src = imageUrl2;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.save();

    var radius = 100;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.clip();

    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(image2, 0, 0, canvas.width, canvas.height);

    ctx.restore();

  };

  return (
    <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
  );
}
