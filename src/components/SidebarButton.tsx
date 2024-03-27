import Link from 'next/link';
import {Button} from './ui/button';

interface SidebarButtonProps {
  icon: any;
  route: string;
}

const SidebarButton = ({
  icon,
  route,
}: SidebarButtonProps) => {
  return (
    <Button
      asChild
      className="p-2"
    >
      <Link href={route}>{icon}</Link>
    </Button>
  );
};

export default SidebarButton;
