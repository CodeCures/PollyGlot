import { ChangeEvent } from "react";
import { LANGUAGES } from "../utils/languages";

type LanguageSelectorProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LanguageSelector = ({ onChange }: LanguageSelectorProps) => (
    <div className="space-y-5">
        <h4 className="input-label">Select language 👇</h4>
        <div className="space-y-2">
            {LANGUAGES.map(language => (
                <label
                    key={language.code}
                    htmlFor={language.code}
                    className="space-x-2 w-full flex items-center"
                >
                    <input
                        type="radio"
                        value={language.name}
                        name="language"
                        id={language.code}
                        onChange={onChange}
                    />
                    <span className="font-bold tracking-wide text-sm">{language.name}</span>
                    <img src={language.flag} alt={`${language.name}-flag`} className="w-6 h-4" />
                </label>
            ))}
        </div>
    </div>
);

export default LanguageSelector;
