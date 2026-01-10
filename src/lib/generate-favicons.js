// generate-favicons.js
const sharp = require('sharp');
const fs = require('fs').promises;
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function generateIcons() {
    const sourceLogo = '../../public/logo.png'; // Ваш логотип 1024x1024

    // 1. PNG иконки
    const sizes = [16, 32, 48, 72, 96, 128, 144, 152, 167, 180, 192, 256, 512];

    for (const size of sizes) {
        await sharp(sourceLogo)
            .resize(size, size)
            .png()
            .toFile(`../../public/favicon-${size}x${size}.png`);

        console.log(`Created: favicon-${size}x${size}.png`);
    }

    // 2. Apple touch icon (180x180)
    await sharp(sourceLogo)
        .resize(180, 180)
        .png()
        .toFile('../../public/apple-touch-icon.png');

    // 3. Для PWA (maskable - с безопасной зоной)
    await sharp(sourceLogo)
        .resize(192, 192)
        .png()
        .toFile('../../public/icon-192.png');

    await sharp(sourceLogo)
        .resize(512, 512)
        .png()
        .toFile('../../public/icon-512.png');

    // 4. Создаем favicon.ico (требует ImageMagick)
    try {
        await execPromise('convert ../../public/favicon-16x16.png ../../public/favicon-32x32.png ../../public/favicon-48x48.png ../../public/favicon.ico');
        console.log('Created: favicon.ico');
    } catch (error) {
        console.log('ImageMagick not installed, skipping .ico generation');
    }

    // 5. SVG иконка (упрощенная версия лого)
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <style>
        .logo-text { font-family: Arial, sans-serif; font-size: 40px; font-weight: bold; }
      </style>
      <rect width="100" height="100" fill="#ffd632"/>
      <text x="50" y="60" text-anchor="middle" class="logo-text">FA</text>
    </svg>
  `;

    await fs.writeFile('../../public/icon.svg', svgContent.trim());
    console.log('Created: icon.svg');
}

generateIcons().catch(console.error);
