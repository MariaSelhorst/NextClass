import { ROUTES } from "../constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3?: string;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {
    return(
        <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link className="bg-preto text-branco" href={ROUTES.home}>{op1}</Link>
            <Link className="bg-preto text-branco" href={ROUTES.axiosPage}>{op2}</Link>
            <Link className="bg-preto text-branco" href={ROUTES.noHookPage}>{op3}</Link>
        </nav>
    )
}