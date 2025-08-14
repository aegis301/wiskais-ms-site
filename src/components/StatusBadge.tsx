import { EventStatus, BaseComponentProps } from '@/types/common';
import { STATUS_BADGE_STYLES } from '@/constants/design';
import { EVENT_STATUS_LABELS } from '@/config/app';

interface StatusBadgeProps extends BaseComponentProps {
  status: EventStatus;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const statusStyles = STATUS_BADGE_STYLES[status] || STATUS_BADGE_STYLES.completed;
  const statusText = EVENT_STATUS_LABELS[status] || 'Unbekannt';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles} ${className}`}>
      {statusText}
    </span>
  );
}
