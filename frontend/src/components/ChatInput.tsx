import { ChangeEvent, MouseEvent } from "react"
import Spinner from "./Spinner";

type ChatInputProp = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    error?: string
}

const ChatInput = ({ value, onChange, onClick, loading, error }: ChatInputProp) => {
    return (
        <div
            className={`flex items-center relative border ${error ? 'border-red-500' : 'border-blue-500'} rounded-md px-4 py-2 ${loading ? 'bg-gray-200' : 'bg-gray-50'
                }`}
        >
            {error && <span className="absolute -top-5 text-xs text-red-500">{error}</span>}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={loading ? 'translating...' : 'Type a message...'}
                className="flex-grow outline-none bg-transparent text-gray-800"
                disabled={loading}
            />
            <button
                onClick={onClick}
                type="button"
                className={`relative ${error ? 'text-red-500' : 'text-green-500'}`}>
                <Spinner loading={loading} size={18} />

                {!loading && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 transform rotate-90"
                >
                    <path
                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                    ></path>
                </svg>}
            </button>
        </div>
    )
}

export default ChatInput