import React, { useEffect } from 'react';

type SimpleModalProps = {
  handleClose: (e?: React.MouseEvent) => void,
  show: boolean,
  children: React.ReactNode[],
  cssClass: string,
}

const SimpleModal = ({ handleClose, show, cssClass, children }: SimpleModalProps) => {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      const key = e.key || e.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        handleClose();
      }
    };

    document.addEventListener('keydown', closeOnEscape, false);

    // Specify how to clean up after this effect (-> componentWillUnmount)
    return function cleanup() {
      document.removeEventListener('keydown', closeOnEscape, false);
    };
  });

  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className={'modal-inner'}>
        <div className={'modal-top-bar'}>
          <button onClick={handleClose}>x</button>
        </div>
        <div className={cssClass}>
          {children}
        </div>
      </section>
    </div>
  );
};

export default SimpleModal;