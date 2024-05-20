import React, { useRef, useState, useEffect } from 'react';

interface ImageSmudgeProps {
  imageUrls: Array<string>;
}

export const ImageSmudge: React.FC<ImageSmudgeProps> = ({ imageUrls }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentImage, setCurrentImage] = useState<HTMLImageElement>(() => {
    const img = new Image();
    img.src = imageUrls[currentIndex];
    return img;
  });
  const [isSmudging, setIsSmudging] = useState(false);
  const [grid, setGrid] = useState<number[][]>([]);


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

  }, [currentImage, nextIndex]);

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
  // let grid: any[] = []; // 2D array to track which grid squares have been smudged

  const handleSmudge = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.save();

    var radius = 100;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.clip();

    const image2 = new Image();
    image2.src = imageUrls[nextIndex];

    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(image2, 0, 0, canvas.width, canvas.height);

    // Calculate the grid squares that have been smudged
    const gridLeft = Math.floor((x - radius) / gridSize);
    const gridRight = Math.ceil((x + radius) / gridSize);
    const gridTop = Math.floor((y - radius) / gridSize);
    const gridBottom = Math.ceil((y + radius) / gridSize);

    const newGrid = [...grid]; // Create a new grid array

    for (let i = gridLeft; i < gridRight; i++) {
      if (!newGrid[i]) {
        newGrid[i] = [];
      }
      for (let j = gridTop; j < gridBottom; j++) {
        newGrid[i][j] = gridSize * gridSize; // Mark the grid square as smudged
      }
    }

    setGrid(newGrid);

    // Calculate the total smudged area
    const totalSmudgedArea = newGrid.reduce((sum, row) => sum + (row ? row.reduce((sum, cell) => sum + (cell || 0), 0) : 0), 0);

    ctx.restore();

    // If the total smudged area is 40% or more of the total canvas area, clear the canvas
    if (totalSmudgedArea / (canvas.width * canvas.height) >= 0.4) {
      setCurrentIndex(nextIndex); // Move to the next image
      setNextIndex((nextIndex + 1) % imageUrls.length); // Set the next image

      const nextImage = new Image();
      nextImage.src = imageUrls[nextIndex];
      setCurrentImage(nextImage); // Reveal the second image

      setGrid([]); // Reset the grid

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (image2.complete) { // Check if the image has been loaded
        ctx.drawImage(nextImage, 0, 0, canvas.width, canvas.height);
      } else {
        image2.onload = () => {
          ctx.drawImage(nextImage, 0, 0, canvas.width, canvas.height);
        };
      }
    }
  };

  return (
    <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
  );
}
