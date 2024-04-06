import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green';
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter rounded-lg border ${variant}`}>
      {icon && <Image src={icon} alt={title} height={24} width={24} />} {title}
    </button>
  );
};

export default Button;
