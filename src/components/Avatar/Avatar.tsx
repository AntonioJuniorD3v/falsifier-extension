import Skeleton from "react-loading-skeleton";
import man01 from "../../assets/images/01-man.png";
import man02 from "../../assets/images/02-man.png";
import man03 from "../../assets/images/03-man.png";
import man04 from "../../assets/images/04-man.png";
import man05 from "../../assets/images/05-man.png";
import man06 from "../../assets/images/06-man.png";
import man07 from "../../assets/images/07-man.png";
import man08 from "../../assets/images/08-man.png";
import man09 from "../../assets/images/09-man.png";
import man10 from "../../assets/images/10-man.png";
import man11 from "../../assets/images/11-man.png";
import man12 from "../../assets/images/12-man.png";
import woman01 from "../../assets/images/01-woman.png";
import woman02 from "../../assets/images/02-woman.png";
import woman03 from "../../assets/images/03-woman.png";
import woman04 from "../../assets/images/04-woman.png";
import woman05 from "../../assets/images/05-woman.png";
import woman06 from "../../assets/images/06-woman.png";
import woman07 from "../../assets/images/07-woman.png";
import woman08 from "../../assets/images/08-woman.png";
import woman09 from "../../assets/images/09-woman.png";
import woman11 from "../../assets/images/10-woman.png";
import woman10 from "../../assets/images/11-woman.png";
import woman12 from "../../assets/images/12-woman.png";

interface IAvatar {
  loading: boolean;
  gender: "M" | "F";
}

export function Avatar({ loading, gender }: IAvatar) {
  const men = {
    "1": man01,
    "2": man02,
    "3": man03,
    "4": man04,
    "5": man05,
    "6": man06,
    "7": man07,
    "8": man08,
    "9": man09,
    "10": man10,
    "11": man11,
    "12": man12,
  };

  const women = {
    "1": woman01,
    "2": woman02,
    "3": woman03,
    "4": woman04,
    "5": woman05,
    "6": woman06,
    "7": woman07,
    "8": woman08,
    "9": woman09,
    "10": woman10,
    "11": woman11,
    "12": woman12,
  };

  const randomKey = Math.floor(Math.random() * (12 - 1 + 1) + 1).toString();

  const imageUrl =
    gender === "M"
      ? men[randomKey as keyof typeof men]
      : women[randomKey as keyof typeof women];

  return (
    <div>
      {loading ? (
        <Skeleton width={100} height={100} circle />
      ) : (
        <img src={imageUrl} width="100px" />
      )}
    </div>
  );
}
