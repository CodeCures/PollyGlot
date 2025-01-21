import { ChangeEvent } from "react";

type TextInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
};

const TextInput = ({ id, label, onChange, placeholder, readOnly = false }: TextInputProps) => (
    <div className="space-y-5 w-full">
        <label htmlFor={id} className="input-label">
            {label}
        </label>
        <textarea
            id={id}
            rows={4}
            className="chat-input"
            placeholder={placeholder || 'Your message...'}
            onChange={onChange}
            readOnly={readOnly}
        ></textarea>
    </div>
);

export default TextInput;
