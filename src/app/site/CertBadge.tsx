import badge from '../../assets/brand/sprint-academy-badge.webp';

/** Sprint Academy certification badge (image). */
export function CertBadge({ size = 168, title = '' }: { size?: number; title?: string }) {
  return (
    <img
      src={badge}
      width={size}
      height={size}
      alt={`Sprint Academy certified training${title ? `: ${title}` : ''}`}
      style={{ display: 'block', flexShrink: 0, width: `${size}px`, height: `${size}px` }}
    />
  );
}
