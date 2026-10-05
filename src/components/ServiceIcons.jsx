const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 40 40',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  mobile: (
    <svg {...iconProps}>
      <rect x="13" y="6" width="14" height="28" rx="3" />
      <line x1="18" y1="29" x2="22" y2="29" />
    </svg>
  ),
  browser: (
    <svg {...iconProps}>
      <rect x="6" y="9" width="28" height="22" rx="2" />
      <line x1="6" y1="15" x2="34" y2="15" />
      <circle cx="10" cy="12" r="1" />
      <circle cx="14" cy="12" r="1" />
    </svg>
  ),
  grid: (
    <svg {...iconProps}>
      <rect x="7" y="7" width="26" height="26" rx="2" />
      <line x1="7" y1="18" x2="33" y2="18" />
      <line x1="18" y1="18" x2="18" y2="33" />
    </svg>
  ),
  network: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="28" cy="12" r="2.5" />
      <circle cx="12" cy="28" r="2.5" />
      <circle cx="28" cy="28" r="2.5" />
      <circle cx="20" cy="20" r="3" />
      <line x1="14" y1="14" x2="18" y2="18" />
      <line x1="26" y1="14" x2="22" y2="18" />
      <line x1="14" y1="26" x2="18" y2="22" />
      <line x1="26" y1="26" x2="22" y2="22" />
    </svg>
  ),
  publish: (
    <svg {...iconProps}>
      <rect x="10" y="20" width="20" height="12" rx="2" />
      <polyline points="14,17 20,7 26,17" />
      <line x1="20" y1="7" x2="20" y2="22" />
    </svg>
  ),
  custom: (
    <svg {...iconProps}>
      <line x1="8" y1="12" x2="32" y2="12" />
      <circle cx="16" cy="12" r="2.5" />
      <line x1="8" y1="20" x2="32" y2="20" />
      <circle cx="26" cy="20" r="2.5" />
      <line x1="8" y1="28" x2="32" y2="28" />
      <circle cx="20" cy="28" r="2.5" />
    </svg>
  ),
};

export default function ServiceIcon({ name }) {
  return icons[name] ?? null;
}
