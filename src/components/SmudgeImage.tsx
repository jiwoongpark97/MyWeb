import React, { useRef, useState, useEffect } from 'react';

interface ImageSmudgeProps {
  imageUrl1: string; // URL of the first image (to be revealed)
  imageUrl2: string; // URL of the second image (to be smudged over)
}

export const ImageSmudge: React.FC<ImageSmudgeProps> = ({ imageUrl1, imageUrl2 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentImage, setCurrentImage] = useState<HTMLImageElement>(() => {
    const img = new Image();
    img.src = imageUrl1;
    return img;
  });
  const [isSmudging, setIsSmudging] = useState(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    currentImage.onload = () => {
      canvas.width = currentImage.width;
      canvas.height = currentImage.height;
      ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    }

  }, [currentImage]);

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

  const gridSize = 10; // Size of each grid square in pixels
  let grid: any[] = []; // 2D array to track which grid squares have been smudged

  const handleSmudge = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

    // Calculate the grid squares that have been smudged
    const gridLeft = Math.floor((x - radius) / gridSize);
    const gridRight = Math.ceil((x + radius) / gridSize);
    const gridTop = Math.floor((y - radius) / gridSize);
    const gridBottom = Math.ceil((y + radius) / gridSize);

    for (let i = gridLeft; i < gridRight; i++) {
      if (!grid[i]) {
        grid[i] = [];
      }
      for (let j = gridTop; j < gridBottom; j++) {
        grid[i][j] = true;
      }
    }

    // Calculate the total smudged area
    const totalSmudgedArea = grid.reduce((sum, row) => sum + row.filter(Boolean).length, 0) * gridSize * gridSize;

    console.log(totalSmudgedArea / (canvas.width * canvas.height));

    // If the total smudged area is 80% or more of the total canvas area, clear the canvas
    if (totalSmudgedArea / (canvas.width * canvas.height) >= 0.8) {
      setCurrentImage(image2); // Reveal the second image
      grid = []; // Reset the grid
    }

    ctx.restore();
  };

  return (
    <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
  );
}
