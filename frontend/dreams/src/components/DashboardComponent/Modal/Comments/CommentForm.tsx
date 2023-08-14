import React, { useState, ChangeEvent, FormEvent } from "react";
import noAvatar from "../../../../assets/media/noAvatar.png";
import Button from "../../../Authorization/Button";

interface CommentFormProps {
    handleSubmit: (text: string) => void;
    submitLabel: string;
    hasCancelButton?: boolean;
    handleCancel?: () => void;
    initialText?: string;
}

const CommentForm: React.FC<CommentFormProps> = ({handleSubmit, submitLabel, initialText = ""}) => {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };



    return (
        <div className="flex flex-row w-full pb-[15px] pt-[20px] pr-[20px] border-t border-solid border-neutral-200">
            <img src={noAvatar} alt="profile-img" className="h-[40px] leading-[40px] w-[40px] mt-[5px] mr-[5px] rounded-[50rem] object-cover"/>
            <div className="pr-[12px] w-full ">
                <form className="flex flex-wrap	justify-end	relative" onSubmit={onSubmit}>
            <textarea
                className="bg-[#fbfbfb] border-solid border-[1px] border-[#e5e5e5] rounded-[4px] w-full min-h-[88px] cursor-text resize-none"
                value={text}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
            />
                    <button className="mt-[10px] mb-[5px]" disabled={isTextareaDisabled} hidden={isTextareaDisabled}>
                        <Button className="w-[86px] h-[26px] border-0 m-0 mr-[0.625rem] leading-none rounded-[39px]">
                            {submitLabel}
                        </Button>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
