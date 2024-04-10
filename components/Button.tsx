import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text';
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter rounded-lg border bold-16 ${variant}`}
    >
      {icon && (
        <Image src={icon} alt={title} height={24} width={24} className="mx-2" />
      )}{' '}
      {title}
    </button>
  );
};

export default Button;
