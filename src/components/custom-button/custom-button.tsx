import { ReactElement, MouseEventHandler } from 'react';
import { Button } from '@/components/ui/button';

type CustomButtonProps = {
  text: string;
  icon?: ReactElement;
  color: string;
  textColor: string;
  hoverColor: string;
  href: string;
  props?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null;
  type?: 'button' | 'submit' | 'reset'; // Added type prop
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function CustomButton({
  text,
  icon,
  color,
  textColor,
  hoverColor,
  props,
  variant,
  type = 'button', // Default type is 'button'
  isLoading = false,
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      className={`${color} ${textColor} px-4 py-2 hover:${hoverColor} transition-all duration-300 ease-in-out ${props}`}
      variant={variant || undefined}
      type={type}
      isLoading={isLoading}
      onClick={onClick}
    >
      <span className="flex items-center justify-center">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </Button>
  );
}
