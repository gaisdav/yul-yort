// SearchLocality.tsx
import Sheet from "react-modal-sheet";
import { FC, Key, useEffect, useRef } from "react";
import css from "./styles.module.scss";
import { CircularProgress, TextField } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { ILocalityEntity } from "../../../../data/Locality";

interface SearchLocalityProps {
  label: string;
  isOpen: boolean;
  closeInputLayer: () => void;
  setLocation: (locality: any) => void;
  from: string | undefined;
  searchLocality: (event: React.ChangeEvent<HTMLInputElement>) => void;
  localities: ILocalityEntity[] | null;
  loading: boolean;
}

const SearchLocality: FC<SearchLocalityProps> = ({
  label,
  isOpen,
  closeInputLayer,
  setLocation,
  from,
  searchLocality,
  localities,
  loading,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    const handleBodyTouchStart = (event: TouchEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleButtonClick();
      }
    };

    document.body.addEventListener("touchstart", handleBodyTouchStart);

    return () => {
      document.body.removeEventListener("touchstart", handleBodyTouchStart);
    };
  }, []);

  console.log("localities", localities);

  return (
    <>
      <Sheet
        rootId="root"
        isOpen={isOpen}
        onClose={closeInputLayer}
        className={css.container}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className={css.container}>
              <TextField
                defaultValue={from}
                id="outlined-basic"
                label={label}
                variant="outlined"
                onChange={searchLocality}
                inputRef={inputRef}
                fullWidth
              />

              {loading ? (
                <div className={css.loaderContainer}>
                  <CircularProgress />
                </div>
              ) : localities && localities.length > 0 ? (
                <ul className={css.localities}>
                  {localities.map((item: any, index: Key) => (
                    <li
                      className={css.locality}
                      onClick={() => setLocation(item)}
                      key={index}
                    >
                      <FmdGoodIcon color="secondary" />
                      <div className={css.localityDescription}>
                        <div className={css.localitiesName}>{item.name}</div>
                        <div className={css.localitiesDistrict}>
                          {item.district}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Ничего не найдено</p>
              )}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default SearchLocality;
