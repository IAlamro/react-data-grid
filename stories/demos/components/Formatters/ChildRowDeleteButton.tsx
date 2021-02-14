import { css } from '@linaria/core';
import { useFocusRef } from '../../../../src/hooks';

const childRowActionCrossClassname = css`
  &::before,
  &::after {
    content: "";
    position: absolute;
    background: grey;
  }

  &::before {
    right: 21px;
    width: 1px;
    height: 100%;
  }

  &::after {
    top: 50%;
    right: 20px;
    height: 1px;
    width: 15px;
  }

  &:hover {
    background: red;
  }
`;

const childRowButtonClassname = css`
  cursor: pointer;
  position: absolute;
  right: 21px;
  transform: translateX(-50%);
  filter: grayscale(1);
`;

export interface ChildRowDeleteButtonProps {
  isCellSelected: boolean;
  isDeleteSubRowEnabled: boolean;
  onDeleteSubRow: () => void;
}

export function ChildRowDeleteButton({ isCellSelected, onDeleteSubRow, isDeleteSubRowEnabled }: ChildRowDeleteButtonProps) {
  const iconRef = useFocusRef<HTMLSpanElement>(isCellSelected);

  function handleKeyDown(e: React.KeyboardEvent<HTMLSpanElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onDeleteSubRow();
    }
  }

  return (
    <>
      <div className={childRowActionCrossClassname} />
      {isDeleteSubRowEnabled && (
        <div className={childRowButtonClassname} onClick={onDeleteSubRow}>
          <span
            ref={iconRef}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
          >
            ❌
          </span>
        </div>
      )}
    </>
  );
}
