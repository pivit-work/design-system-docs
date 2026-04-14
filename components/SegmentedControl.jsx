import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styles from './SegmentedControl.module.css';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function SegmentedControl({
  items = [],
  size = 'md',
  defaultValue,
  value,
  onChange,
}) {
  const initial = defaultValue ?? items[0]?.value ?? items[0]?.label;
  const [internal, setInternal] = useState(initial);
  const current = value !== undefined ? value : internal;

  const itemRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState(null);

  const activeIndex = items.findIndex(
    (item) => (item.value ?? item.label) === current
  );

  useIsoLayoutEffect(() => {
    const node = itemRefs.current[activeIndex];
    if (!node) return;
    setIndicatorStyle({
      left: node.offsetLeft,
      top: node.offsetTop,
      width: node.offsetWidth,
      height: node.offsetHeight,
    });
  }, [activeIndex, items.length, size]);

  const handleSelect = (itemValue) => {
    if (value === undefined) setInternal(itemValue);
    onChange?.(itemValue);
  };

  const containerClasses = [styles.container, styles[`size-${size}`]]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} role="tablist">
      {indicatorStyle && (
        <span
          className={styles.indicator}
          style={indicatorStyle}
          aria-hidden="true"
        />
      )}
      {items.map((item, i) => {
        const itemValue = item.value ?? item.label;
        const isActive = current === itemValue;
        const segmentClasses = [styles.segment, isActive && styles.active]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={segmentClasses}
            onClick={() => handleSelect(itemValue)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
