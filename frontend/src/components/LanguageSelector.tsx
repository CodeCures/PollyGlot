import { ChangeEvent } from "react";
import { LANGUAGES } from "../utils/languages";

type LanguageSelectorProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const LanguageSelector = ({ onChange }: LanguageSelectorProps) => (
    <div className="flex justify-center space-x-3 mt-2">
        {LANGUAGES.map((language) => (
            <label
                key={language.code}
                htmlFor={language.code}
                className="cursor-pointer"
            >
                <input
                    type="radio"
                    className="hidden peer"
                    value={language.name}
                    name="language"
                    id={language.code}
                    onChange={onChange}
                />
                <img
                    src={language.flag}
                    alt={`${language.name}-flag`}
                    className="w-10 h-6 border-2 border-transparent peer-checked:border-blue-500"
                />
            </label>
        ))}
    </div>
);

export default LanguageSelector;

