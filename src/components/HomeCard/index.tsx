import { ReactNode, useEffect, useRef, useState } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import styles from "./styles.module.css";

type HomeCardProps = {
  children: ReactNode;
};

function HomeCard({ children }: HomeCardProps) {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const sheetRef = useRef<SheetRef>();

  const onSnap = (snapIndex: number) => {
    if (snapIndex === 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const snap = () => {
    if (isActive) {
      sheetRef.current?.snapTo(1);
    } else {
      sheetRef.current?.snapTo(0);
    }
  };

  useEffect(() => {
    setShouldDisplay(true);
  }, []);

  return (
    <>
      <div className={styles.homeCard}>{children}</div>

      <Sheet
        className={styles.bottomSheet}
        ref={sheetRef}
        isOpen={shouldDisplay}
        onClose={() => console.log("Did close, that would be bad.")}
        snapPoints={[-96, 96]}
        initialSnap={1}
        disableScrollLocking={!isActive}
        onSnap={onSnap}
      >
        <Sheet.Container
          className={styles.bottomSheetContainer}
          style={{ borderTopRightRadius: 96, borderTopLeftRadius: 96 }}
        >
          <Sheet.Header onTap={snap} style={{ paddingBottom: 96 }} />
          <Sheet.Content>{children}</Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}

export default HomeCard;
