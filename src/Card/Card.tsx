import { useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { dateOfBirthGenerator } from "../utils/dateOfBirthGenerator";
import { Avatar } from "../components/Avatar";
import { Info } from "../components/Info";
import toast from "react-hot-toast";
import { maskCpf, phoneMask } from "../utils/masks";
import { falseador } from "falseador";
import "./styles.css";
import { initialValuesReducer } from "./contants";
import { CountActionKind, Gender, IAction, IState } from "./types";
import RefreshIcon from "../components/RefreshIcon/RefreshIcon";
import GithubIcon from "../components/GithubIcon/GithubIcon";

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case CountActionKind.GENERATE:
      const randomGender: Gender = ["M", "F"][
        Math.floor(Math.random() * 2)
      ] as Gender;
      const randomName = falseador.nome.composto(randomGender);
      return {
        ...state,
        name: randomName,
        dateOfBirth: dateOfBirthGenerator(),
        cpf: falseador.doc.cpf(),
        email: falseador.pessoa.email(randomName),
        phone: faker.phone.number("###########"),
        gender: randomGender,
        loading: false,
      };
    case CountActionKind.IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default function Card() {
  const [state, dispatch] = useReducer(reducer, initialValuesReducer);

  const generateFakeDataWithDebounce = () => {
    dispatch({ type: CountActionKind.IS_LOADING });

    setTimeout(() => {
      dispatch({ type: CountActionKind.GENERATE });
    }, 500);
  };

  const copyContent = async (text: string) => {
    toast.dismiss();
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copiado para área de transferência!", {
        id: "clipboard",
        duration: 800,
      });
    } catch (err) {
      toast.error("Ocorreu um erro ao copiar!", {
        id: "clipboard",
        duration: 800,
      });
    }
  };

  useEffect(() => {
    generateFakeDataWithDebounce();
  }, []);

  const { loading, name, dateOfBirth, cpf, email, phone, gender } = state;

  return (
    <>
      <div id="container-avatar">
        <Avatar loading={loading} gender={gender} />
      </div>
      <div id="container-data">
        <div className="info">
          <h2>Nome: </h2>
          <Info
            loading={loading}
            data={name}
            onClick={() => copyContent(name)}
          />
        </div>
        <div className="info">
          <h2>Data de nascimento:</h2>
          <Info
            loading={loading}
            data={dateOfBirth}
            onClick={() => copyContent(dateOfBirth)}
          />
        </div>
        <div className="info">
          <h2>CPF:</h2>
          <Info
            loading={loading}
            data={maskCpf(cpf ?? "")}
            onClick={() => copyContent(cpf)}
          />
        </div>
        <div className="info">
          <h2>Telefone:</h2>
          <Info
            loading={loading}
            data={phoneMask(phone ?? "")}
            onClick={() => copyContent(phone)}
          />
        </div>
        <div className="info">
          <h2>Email:</h2>
          <Info
            loading={loading}
            data={email}
            onClick={() => copyContent(email)}
          />
        </div>
      </div>
      <RefreshIcon id="refresh-icon" onClick={generateFakeDataWithDebounce} />
      <a
        title="Github repo"
        target="_blank"
        href="https://github.com/AntonioJuniorD3v/falsifier-extension"
      >
        <GithubIcon id="github-icon" />
      </a>
    </>
  );
}
