import React from 'react';
import { Button } from './Button';
import styles from './Modal.module.css';

const Icons = {
  brand: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  warning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  error: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  ),
};

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function Modal({
  type = 'horizontal',
  icon = 'brand',
  title,
  description,
  breakpoint = 'desktop',
  showDivider = true,
  actionsLayout = 'right',
  primaryLabel,
  primaryDestructive = false,
  secondaryLabel,
  helper,
  onClose,
  onPrimary,
  onSecondary,
  children,
}) {
  const hasActions = primaryLabel || secondaryLabel || helper;

  return (
    <div className={styles.panel} data-breakpoint={breakpoint} role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined}>
      <div className={styles.header} data-type={type}>
        <div className={styles.headerContent}>
          {icon !== 'none' && (
            <span className={styles.featuredIcon} data-tone={icon} aria-hidden="true">
              {Icons[icon]}
            </span>
          )}
          <div className={styles.textBlock}>
            {title && <h3 id="modal-title" className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </div>
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className={styles.headerPaddingBottom} />
        {showDivider && <div className={styles.divider} />}
      </div>

      {children && <div className={styles.body}>{children}</div>}

      {hasActions && (
        <div className={styles.actions} data-layout={actionsLayout}>
          {helper && <div className={styles.helper}>{helper}</div>}
          {secondaryLabel && (
            <Button variant="outline" size="lg" onClick={onSecondary}>
              {secondaryLabel}
            </Button>
          )}
          {primaryLabel && (
            <Button
              variant={primaryDestructive ? 'destructive-primary' : 'primary'}
              size="lg"
              onClick={onPrimary}
            >
              {primaryLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
