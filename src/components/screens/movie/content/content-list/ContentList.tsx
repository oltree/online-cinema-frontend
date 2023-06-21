import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './ContentList.module.scss';

type LinkType = {
  _id: string;
  link: string;
  title: string;
};

interface ContentListProps {
  name: string;
  links: LinkType[];
}
export const ContentList: FC<ContentListProps> = memo(({ name, links }) => (
  <div className={styles.list}>
    <div className={styles.name}>{name}:</div>
    <div className={styles.links}>
      {links.slice(0, 3).map(({ link, title, _id }, index) => (
        <p key={_id}>
          <Link href={link}>{title}</Link>
          {index + 1 === links.length ? '' : ', '}
        </p>
      ))}
    </div>
  </div>
));
