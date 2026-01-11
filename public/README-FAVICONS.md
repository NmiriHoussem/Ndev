# Favicon Files Required

To complete the SEO setup, you need to add the following favicon files to the `/public` folder:

## Required Files:

1. **favicon.ico** (16x16 and 32x32 multi-resolution)
   - Classic ICO format for broad browser compatibility

2. **favicon-16x16.png**
   - Small size for browser tabs

3. **favicon-32x32.png**
   - Standard size for browser tabs

4. **apple-touch-icon.png** (180x180)
   - For iOS home screen icons

5. **android-chrome-192x192.png**
   - For Android home screen icons (standard)

6. **android-chrome-512x512.png**
   - For Android splash screens (high res)

7. **mstile-150x150.png**
   - For Windows 10/11 Start Menu tiles

8. **safari-pinned-tab.svg**
   - For Safari pinned tabs (monochrome SVG)

## How to Generate These Files:

### Option 1: Use Online Tools (Recommended)
1. Visit **https://realfavicongenerator.net/**
2. Upload the `/public/favicon.svg` file
3. Customize settings if needed
4. Download the generated package
5. Extract and replace files in `/public` folder

### Option 2: Use Figma/Design Tool
1. Create a 512x512px icon with your brand
2. Export in various sizes listed above
3. Use a tool like ImageMagick or Photoshop to convert to ICO format

### Option 3: Manual Creation
Use the existing logo at `/src/assets/logo.svg` or `/src/assets/logo.png`:
```bash
# If you have ImageMagick installed:
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 android-chrome-192x192.png
convert logo.png -resize 512x512 android-chrome-512x512.png
```

## Current Status:
- ✅ `favicon.svg` - Created (base template)
- ⏳ Other files need to be generated and added

## Notes:
- The `favicon.svg` file contains a template design with the "N" letter
- You can customize this design to match your exact branding
- All PNG files should use transparent backgrounds where appropriate
- ICO file should contain multiple resolutions (16x16, 32x32, 48x48)
