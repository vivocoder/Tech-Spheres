import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-[5px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500/20 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-brown-500 hover:bg-brown-600 text-white shadow-sm hover:shadow-md border border-transparent',
    secondary: 'bg-white hover:bg-cream-100 text-charcoal border border-border hover:border-beige-300 shadow-sm',
    outline: 'border border-brown-500 text-brown-600 hover:bg-brown-500 hover:text-white',
    dark: 'bg-charcoal hover:bg-black text-white shadow-sm',
    cream: 'bg-cream-100 hover:bg-cream-200 text-charcoal border border-border',
    subtle: 'bg-beige-100/70 hover:bg-beige-200/80 text-brown-700 border border-beige-200'
  };

  const sizes = {
    sm: 'text-[16px] px-3.5 py-1.5 gap-1.5',
    md: 'text-[15px] px-5 py-2.5 gap-2',
    lg: 'text-[17px] px-6 py-3 gap-2.5'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
