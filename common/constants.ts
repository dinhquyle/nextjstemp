export const SITE_CONFIG = {
  title: `Next.js starter`,
  description: `Next.js starter`,
};

/*
 * Styles
 */
export const COLORS: { [key: string]: string } = {
  richBlack: `#010203`,
  aliveVGreen: `#00d1b3`,
};

export const API_URI = process.env.NEXT_PUBLIC_API_URI;
export const SITE_URI = process.env.NEXT_PUBLIC_SITE_URI;
export const GQL_URI = process.env.NEXT_PUBLIC_GQL_URI;
export const BASIC_AUTH = process.env.NEXT_PUBLIC_BASIC_AUTH;
export const UPLOADS_DIR = process.env.NEXT_PUBLIC_UPLOADS_DIR;

export const POSTS_PER_PAGE = 10;

export const BKUP_IMG = {
  sourceUrl: `/images/common/no_image_available.jpg`,
  width: 1600,
  height: 1200,
  altText: `No image available`,
};
