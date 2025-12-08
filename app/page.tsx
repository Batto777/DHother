// app/page.tsx
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(
  path.join(process.cwd(), 'public', 'html', 'index-body.html'),
  'utf8'
);

export default function HomePage() {
  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}
