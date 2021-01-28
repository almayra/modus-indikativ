import { CSSProperties } from "react";
import "./searchbar.scss";
interface ISearchbar {
    searchQuery?: string;
    setSearchQuery?: any;
    placeholder?: string;
    width?: number | string;
    containerStyle?: CSSProperties;
    inputStyle?: CSSProperties;
    className?: string;
}
export declare const Searchbar: ({ searchQuery, setSearchQuery, placeholder, width, containerStyle, inputStyle, className, }: ISearchbar) => JSX.Element;
export default Searchbar;
//# sourceMappingURL=Searchbar.d.ts.map