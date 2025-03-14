export const checkImageExists = async (url: string): Promise<boolean> => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
};

export const getImagePath = (path: string, fallback = '/images/placeholder.jpg') => {
  if (!path) return fallback;
  
  // Handle external URLs
  if (path.startsWith('http')) return path;
  
  // Ensure public paths begin with /
  return path.startsWith('/') ? path : `/${path}`;
};

export const optimizeImageSrc = (src: string, width?: number, height?: number) => {
  if (!src || src.startsWith('data:') || src.includes('placeholder')) {
    return src;
  }
  
  // For external images that support optimization
  if (src.includes('picsum.photos')) {
    return width && height 
      ? `https://picsum.photos/${width}/${height}` 
      : src;
  }
  
  // For local images, return as is (Astro will handle optimization)
  return src;
}; 