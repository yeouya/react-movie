import { useEffect, Dispatch, SetStateAction, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { Props } from "../types";
import style from "./Modal.module.css";

interface ModalProps extends Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  target: string;
}

const { wrapper } = style;

export default function Modal({
  isOpen,
  setIsOpen,
  target,
  children,
}: ModalProps) {
  const handleClick = ({
    target,
    currentTarget,
  }: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (target === currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleKeydown = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [setIsOpen]);

  const container = document.querySelector(target);

  if (!container) {
    throw new ReferenceError("모달 컨테이너로 사용할 타겟을 찾지 못했습니다.");
  }

  return createPortal(
    isOpen && (
      <div className={wrapper} onClick={handleClick}>
        {children}
      </div>
    ),
    container
  );
}
