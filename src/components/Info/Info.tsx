import Skeleton from "react-loading-skeleton";

interface IInfo extends React.HTMLAttributes<HTMLAnchorElement> {
  loading: boolean;
  data: string;
}

export function Info({ loading, data, ...rest }: IInfo) {
  return (
    <span
      data-tooltip-id="tooltip"
      data-tooltip-content="Clique para copiar!"
      data-tooltip-place="top"
      {...rest}
    >
      {loading ? <Skeleton width={100} height={15} /> : data}
    </span>
  );
}
