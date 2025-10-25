import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const iconPath = path.join(process.cwd(), '.idx', 'icon.png');
    const file = await fs.readFile(iconPath);
    const uint8 = new Uint8Array(file);
    return new Response(uint8, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  } catch (error) {
    return new Response('Icon not found', { status: 404 });
  }
}
